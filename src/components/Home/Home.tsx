import React, { useEffect, useRef } from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "../App/useStyles";
import embed from "../Qlik/configure";
import connect from "../Qlik/connect";

const Component = () => {
  const classes = useStyles();
  const toolbarRef = useRef(null);
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartRef4 = useRef(null);
  const chartRef5 = useRef(null);
  const chartRef6 = useRef(null);

  async function init() {
    const app = await connect({
      url: "https://incognito.us.qlikcloud.com/",
      webIntegrationId: "jUMqi2hs30peNvVKG4Grd2MI_LdpcpdR",
      appId: "6c2f60c0-63c0-4ae9-9bd4-3eacd77802f3",
    });

    const n = embed(app);

    const selections = await n.selections();
    selections.mount(toolbarRef.current);

    // scatterplot
    n.render({
      element: chartRef1.current,
      id: "UgrkWm",
    });
    // dist plot
    n.render({
      element: chartRef2.current,
      id: "jUHbaS",
    });
    // line chart
    n.render({
      element: chartRef3.current,
      id: "hRZaKk",
    });
    // KPI 1
    n.render({
      element: chartRef4.current,
      id: "CSxZqS",
    });
    // KPI 2
    n.render({
      element: chartRef5.current,
      id: "eJCaw",
    });
    // KPI 3
    n.render({
      element: chartRef6.current,
      id: "dbEG",
    });
  }

  useEffect(() => {
    init();
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          <div ref={toolbarRef} />
        </Grid>
        <Grid item xs={4}>
          <Paper ref={chartRef4} className={classes.kpi} />
        </Grid>
        <Grid item xs={4}>
          <Paper ref={chartRef5} className={classes.kpi} />
        </Grid>
        <Grid item xs={4}>
          <Paper ref={chartRef6} className={classes.kpi} />
        </Grid>
        <Grid item xs={6}>
          <Paper ref={chartRef1} className={classes.object} />
        </Grid>
        <Grid item xs={6}>
          <Paper ref={chartRef2} className={classes.object} />
        </Grid>
        <Grid item xs={12}>
          <Paper ref={chartRef3} className={classes.object} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Component;
