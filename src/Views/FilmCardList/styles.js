import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#242322",
  },
  title: {
    marginTop: "130px",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    "& span": {
      fontFamily: "Rockout",
    },
  },
  cards: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    //padding: '25px',
    justifyContent: "center",
  },
  item: {
    flex: "1 1 33,3333%",
    alignSelf: "center",
    margin: "25px",
  },
  flex: {
    display: "flex",
  },
  metaComponent: {
    height: "100vh",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
}));

export { useStyles };
