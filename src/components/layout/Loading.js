import  AvatarLoading  from "../../loading.gif";
import { makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles({
  root: {
    width: "70px",
    height: "70px",
    paddingTop: "50px",
  },
});

const Loading = () => {
  const classes = useStyles();

  return <img src={AvatarLoading} className={classes.root} />;
};

export default Loading;
