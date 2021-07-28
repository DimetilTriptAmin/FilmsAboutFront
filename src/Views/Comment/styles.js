import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
  },

  ratingContainer: {
    alignItems: "center",
  },

  commentContainer: {
    padding: "0px",
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    margin: "40px 0",
  },

  header: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px",
  },

  userContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    color: "#fff",
  },

  headerText: {
    margin: "10px",
    fontSize: "20px",
    fontWeight: "700",
  },

  commentText: {
    padding: "30px",
    margin: "10px",
    fontSize: "18px",
  },

  dateText: {
    margin: "0 10px",
  },

  divider: {
    height: "2px",
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
}));

export default useStyles;
