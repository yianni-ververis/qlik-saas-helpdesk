import { makeStyles } from "@material-ui/core/styles";
import { ThemeType } from "./types";

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    maxWidth: 1200,
    padding: "100px 50px 50px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: "150px 20px 50px 20px",
    },
  },
  object: {
    width: "100%",
    height: 400,
  },
  kpi: {
    width: "100%",
    height: 200,
  },
}));

export { useStyles };
