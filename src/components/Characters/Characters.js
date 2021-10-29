import { Fragment, useContext, useEffect } from "react";
import { Grid } from "@material-ui/core";
import CharacterCard from "./CharacterCard";
import AvatarContext from "../../context/avatar/AvatarContext";
import Loading from "../layout/Loading";

const Characters = () => {
  const avatarContext = useContext(AvatarContext);
  const { loadCharacters, characters, loading, character, search_Character, currentPage } = avatarContext;

  useEffect(() => {
    character!=='' ? search_Character(character, currentPage) : loadCharacters(currentPage);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2} style={{ paddingTop: "32px" }}>
          {characters.map((character) => (
            <Grid item xs={12} md={4}>
              <CharacterCard key={character._id} character={character} />
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default Characters;
