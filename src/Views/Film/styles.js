import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: "150px",
    backgroundColor: "#242322",
  },

  poster: {
    height: "500px",
    width: "350px",
  },

  text: {
    color: "#fff",
    padding: "0",
    alignSelf: "center",
  },

  rateText: {
    marginRight: "5px",
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
    justifyContent: "space-between",
  },

  fetchedRate: {
    display: "flex",
  },

  userRate: {
    display: "flex",
    margin: "20px",
  },

  rating: {
    fontSize: "45px",
  },

  loader: {
    display: "flex",
    marginTop: "10%",
    justifyContent: "center",
  },
}));

export default useStyles;
