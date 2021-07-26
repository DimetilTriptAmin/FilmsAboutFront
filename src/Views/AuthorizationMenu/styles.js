import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    borderColor: "#fff",
  },
  menuItem: {
    fontSize: "1.17em",
    fontFamily: "Roboto",
    color: "#fff",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
  },
  flex: {
    display: "flex",
  },
}));

export default useStyles;
