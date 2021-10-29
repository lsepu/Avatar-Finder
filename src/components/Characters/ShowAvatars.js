import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import AvatarContext from "../../context/avatar/AvatarContext";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    fontSize: "14px",
  },
});

const ShowAvatars = () => {
  const avatarContext = useContext(AvatarContext);
  const { loading } = avatarContext;

  const classes = useStyles();
  return (
    <>
      {!loading && (
        <Link to="/avatars">
          <Button className={classes.root} variant="contained" color="primary">
            Show all avatars
          </Button>
        </Link>
      )}
    </>
  );
};

export default ShowAvatars;
