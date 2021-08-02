import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#242322',  
  },

  content: {
    padding: "150px 0 40px",
  },

  flex: {
    display: "flex",
  },

  text: {
    color: "#fff",
    padding: "0",
    alignSelf: "center",
  },

  flexWrap: {
    flexWrap: "wrap",
  },

  poster: {
    width: "400px",
    margin: "0",
  },

  about: {
    flexDirection: "column",
    flex: "1 1 0",
    margin: "0",
  },

  posterImg: {
    height: "500px",
    width: "350px",
  },

  rateText: {
    marginRight: "5px",
  },

  playerContainer: {
    justifyContent: "center",
    margin: "40px",
  },

  ratingContainer: {
    margin: "20px",
  },

  title: {
    marginBottom: "30px",
    justifyContent: "space-between",
  },

  userRate: {
    margin: "20px",
  },

  rating: {
    fontSize: "45px",
  },

  metaComponent: {
    height: "100vh",
    margin: "auto",
    justifyContent: "center",
  },

  divider: {
    height: "2px",
    borderRadius: "50%",
    backgroundColor: "#fff",
  },

  headerText: {
    margin: "30px",
  },
}));

export default useStyles;
