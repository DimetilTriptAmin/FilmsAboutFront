import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  baseFlexElement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  headerContainer: {
    height: "100vh",
  },

  header: {
    margin: "auto",
  },

  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: "50px",
  },
});

export default useStyles;
