import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  baseFlexElement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  headerContainer: {
    margin: "auto",
  },

  header: {
    width: "70%",
  },

  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: "50px",
  },
});

export default useStyles;
