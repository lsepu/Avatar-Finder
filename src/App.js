import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Search from "./components/layout/Search";
import Characters from "./components/Characters/Characters";
import Pages from "./components/layout/Pages";
import AvatarState from "./context/avatar/AvatarState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Character from "./pages/Character";
import ShowAvatars from "./components/Characters/ShowAvatars";
import Avatars from "./pages/Avatars";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    fontSize: '3.2rem',
    color: "white",
    textShadow: "5px 3px 10px rgb(0,0,0)",
    marginTop: '1rem'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <AvatarState>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Container maxWidth="lg" className={classes.root}>
                <h1 className={classes.title}>Avatar character search</h1>
                <Search />
                <ShowAvatars />
                <Characters />
                <Pages />
              </Container>
            )}
          />
          <Route exact path='/character/:name' component={Character} />
          <Route exact path='/avatars' component={Avatars} />
        </Switch>
      </Router>
    </AvatarState>
  );
}

export default App;
