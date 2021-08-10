import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#242322",
    },
  },
  menuItem: {
    color: "#fff",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
  },
  flex: {
    display: "flex",
  },
  title: {
    alignSelf: "center",
    margin: "0 10px",
    color: "#fff",
  },
}));

export default useStyles;
