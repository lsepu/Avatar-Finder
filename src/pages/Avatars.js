import { useContext, useEffect } from "react";
import AvatarContext from "./../context/avatar/AvatarContext";
import Grid from "@material-ui/core/Grid";
import CharacterCard from "../components/Characters/CharacterCard";
import Container from "@material-ui/core/Container";
import Loading from "../components/layout/Loading";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Avatars = () => {
  const avatarContext = useContext(AvatarContext);
  const { getAvatars, characters, loading } = avatarContext;

  useEffect(() => {
    getAvatars();
  }, []);

  return (
    <Container maxWidth="lg">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "32px" }}
            >
              Go back
            </Button>
          </Link>
          <Grid container spacing={2} style={{ paddingTop: "32px" }}>
            {characters.map((character) => (
              <Grid item xs={12} md={4}>
                <CharacterCard key={character._id} character={character} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Avatars;
