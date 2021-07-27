import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: "50px",
  },
});

export default useStyles;
