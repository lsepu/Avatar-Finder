import { useContext, useEffect } from "react";
import AvatarContext from "../context/avatar/AvatarContext";
import { makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    maxWidth: "500px",
    margin: '0px 20px',
    backgroundColor: "#516075",
    color: 'white',
    borderRadius: "15px",
    border: "4px solid #616b79;",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "1px 2px 15px rgba(0,0,0,0.8)",
      backgroundColor: "#475870",
    },
  },
  img: {
    height: "300px",
    objectFit: "cover",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    fontSize: "20px",
    marginTop: '5px'
  },
});

const Character = ({ location }) => {
  const avatarContext = useContext(AvatarContext);
  const { getCharacter, characterInfo, clearCharacter } = avatarContext;

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    getCharacter(location.id);
  }, []);

  return (
    <div className={classes.root}>
      {characterInfo ? (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={characterInfo.name}
              image={characterInfo.photoUrl}
              className={classes.img}
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              {characterInfo.name}
            </Typography>
            <Typography variant="h5" style={{textAlign:'center'}}>{characterInfo.affiliation}</Typography>
            { characterInfo.allies?.length > 0 && (<Typography variant="h5">Allies:</Typography> )} 

            <ul className={classes.list}>
              {characterInfo.allies?.map((ally) => (
                <li>{ally}</li>
              ))}
            </ul>
           { characterInfo.enemies?.length > 0 && (<Typography variant="h5">Enemies:</Typography> )} 
            <ul className={classes.list}>
              {characterInfo.enemies?.map((enemy) => (
                <li>{enemy}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <h1 style={{color: 'white'}}>Character not found</h1>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "15px", fontSize:'16px', width:'200px' }}
        onClick={() => {
          clearCharacter();
          history.goBack();
        }}
      >
        Go back
      </Button>
    </div>
  );
};

export default Character;
