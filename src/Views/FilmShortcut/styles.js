import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
  },

  text: {
    color: "#fff",
    padding: "0",
    alignSelf: "center",
    margin: "10px",
  },

  poster: {
    width: "40px",
    height: "60px",
  },

  rating: {
    display: "flex",
    alignSelf: "center",
  },
}));

export default useStyles;
