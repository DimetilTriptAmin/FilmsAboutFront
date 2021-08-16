import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#242322",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "100px 0 100px 0px",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    paddingLeft: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
  },
  category: {
    marginTop: "30px",
  },
  imageContainer: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
  },
  changeImageContainer: {
    marginTop: "25px",
  },

  span: {
    fontStyle: "italic",
  },

  image: {
    height: "250px",
    width: "250px",
  },
  saveButtonContainer: {
    textAlign: "center",
    margin: "15px",
  },
  saveButton: {
    background: "linear-gradient(45deg, #00b712 30%, #20bf55 90%)",
    borderRadius: 7,
    border: 0,
    color: "white",
    height: 50,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .8)",
  },
  form: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
  },

  input: {
    color: "white",
    border: "0",
    fontSize: "20px",
    width: "100%",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "grey",
    },
    "& .MuiInput-underline": {
      borderBottomColor: "green",
    },

    "& .MuiInputLabel-root": {
      color: "grey",
    },

    "& .MuiInput-underline:hover:not($disabled):not($focused):not($error):before":
      {
        borderBottom: `2px solid #ffffff`,
      },
  },

  field: {
    margin: "10px 10px 30px 10px",
  },

  submit: {
    margin: "25px 10px 10px 10px",
    color: "#dcdcdd",
    background: "linear-gradient(45deg, #00b712 30%, #20bf55 90%)",
    border: "0",
    fontSize: "20px",
  },
}));

export { useStyles };
