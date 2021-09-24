import { embed } from "@nebula.js/stardust";
import barchart from "@nebula.js/sn-bar-chart";
import lineChart from "@nebula.js/sn-line-chart";
import scatterPlot from "@nebula.js/sn-scatter-plot";
import distributionplot from "@nebula.js/sn-distributionplot";
import kpi from "@nebula.js/sn-kpi";

const n = embed.createConfiguration({
  context: {
    theme: "light",
    language: "en-US",
  },
  types: [
    {
      name: "barchart",
      load: () => Promise.resolve(barchart),
    },
    {
      name: "linechart",
      load: () => Promise.resolve(lineChart),
    },
    {
      name: "scatterplot",
      load: () => Promise.resolve(scatterPlot),
    },
    {
      name: "distributionplot",
      load: () => Promise.resolve(distributionplot),
    },
    {
      name: "kpi",
      load: () => Promise.resolve(kpi),
    },
  ],
});

export default n;
