import { Box, TextField, Grid, Button, makeStyles } from "@material-ui/core";
import { useContext, useState, useEffect } from "react";
import AvatarContext from "../../context/avatar/AvatarContext";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
}));

const Search = () => {
  const avatarContext = useContext(AvatarContext);
  const { search_Character, loadCharacters, character } = avatarContext;

  const [text, setText] = useState("");
  const [error, setError] = useState({ state: false, message: "" });
  const [clear, setClear] = useState(true);

  useEffect(() => {
    character!=='' && setClear(false); setText(character);
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
    try {
      if (text === "") {
        throw "Please enter a character";
      }
      search_Character(text);
      setClear(false);
    } catch (err) {
      setError({ state: true, message: err });
      setTimeout(() => {
        setError({ state: false, message: "" });
      }, 1000);
    }
  };

  const handleClear = () =>{
    setText("");
    setClear(true);
    loadCharacters();
  }

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <form onSubmit={(e) => handleSearch(e)}>
        <Grid container>
          <Grid item xs={12} sm={8} md={10} style={{marginTop:'5px'}}>
            <TextField
              inputProps={{ style: { fontSize: 16, color:'white' } }}
              InputProps={{style : { backgroundColor: 'rgba(48, 64, 87,0.8)', border:'3px solid #616b79'}}}
              InputLabelProps={{ style: { fontSize: 16, color:'white' } }}
              id="outlined-size-normal"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search Avatar character..."
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={1} style={{marginTop:'5px'}}>
            <Button
              style={{ height: "100%", width: "90%", marginLeft:'5px' }}
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={6} sm={2} md={1} style={{marginTop:'5px'}}>
            <Button
              style={{ height: "100%", width: "90%" }}
              size="large"
              onClick={() => handleClear()}
              variant="contained"
              color="secondary"
              disabled={clear}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
      {error.state && (
        <Alert style={{ marginTop: "10px" }} severity="error">
          {error.message}
        </Alert>
      )}
    </Box>
  );
};

export default Search;
