import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
  },

  commentContainer: {
    padding: "20px",
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    margin: "40px 0 0",
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

  metaComponent: {
    height: "100vh",
    margin: "auto",
    justifyContent: "center",
  },

  submit: {
    margin: "25px 0px 10px 0px",
    color: "#dcdcdd",
    background: "linear-gradient(45deg, #00b712 30%, #20bf55 90%)",
    border: "0",
    fontSize: "20px",
  },
}));

export default useStyles;
