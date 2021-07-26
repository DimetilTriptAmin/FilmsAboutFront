import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: "150px",
    backgroundColor: "#242322",
  },

  poster: {
    height: "500px",
    width: "100%",
  },

  text: {
    color: "#fff",
    padding: "0",
    alignSelf: "center",
  },

  playerContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "40px",
  },

  ratingContainer: {
    margin: "20px",
  },

  title: {
    display: "flex",
    marginBottom: "30px",
  },

  fetchedRate: {
    display: "flex",
    marginLeft: "50px",
  },

  userRate: {
    display: "flex",
    margin: "20px",
  },

  rating: {
    fontSize: "50px",
  },
}));

export default useStyles;
