import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

//icons
import fireIcon from '../../icons/fire.png';
import airIcon from '../../icons/air.png';
import waterIcon from '../../icons/water.png';
import earthIcon from '../../icons/earth.png';
import appaIcon from '../../icons/appa.png';

const useStyles = makeStyles({
  root: {
    textAlign: "left",
    display: "flex",
    position: 'relative',
    height: 150,
    cursor: "pointer",
    backgroundColor: "#516075",
    borderRadius: "15px",
    border: "4px solid #616b79;",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "1px 2px 15px rgba(0,0,0,0.8)",
      backgroundColor: "#475870",
    },
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
  },
  affiliation: {
    fontSize: "16px",
    color: "white",
  },
  img: {
    minWidth: 120,
  },
});

const CharacterCard = ({ character }) => {
  const classes = useStyles();
  const { name, photoUrl, affiliation } = character;

  const setIcon = () => {
    var affiliations = ["fire" , "water", "earth", "air"];

    //if it finds it and the affiliation is not undefined then return the tribe
    const tribe = affiliations.find((element) => {
      return affiliation?.toLowerCase()?.includes(element);
    });

    switch(tribe) {
      case 'water':
        return waterIcon;
      case 'fire':
        return fireIcon;
      case 'air':
        return airIcon;
      // case 'earth':
      //   return earthIcon;
      default:
        return;
    }

  };

  return (
    <Link to={{pathname: `/character/${name}`, id: character._id}} style={{ textDecoration: "none" }}>
      <Card className={classes.root}>
        <CardMedia className={classes.img} image={photoUrl} title={name} />
        <CardContent>
            <Typography className={classes.title}>{name}</Typography>
            <img src={setIcon()} style={{width: '250px', position: 'absolute', right: '-100px', top: '0'}} alt=""/>
          <Typography className={classes.affiliation} style={{position: 'relative'}}>{affiliation}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CharacterCard;
