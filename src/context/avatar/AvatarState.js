import AvatarContext from "./AvatarContext";
import avatarReducer from "./avatarReducer";
import { useReducer } from "react";
import {
  LOAD_CHARACTERS,
  SET_LOADING,
  SEARCH_CHARACTER,
  GET_CHARACTER,
  CLEAR_CHARACTER,
  GET_AVATARS,
  UPDATE_CHARACTERS,
  SET_PAGE,
} from "../types";

import axios from "axios";
import SelectInput from "@material-ui/core/Select/SelectInput";

const AvatarState = (props) => {
  const CHARACTERS_PER_PAGE = "9";

  const Generalstate = {
    characters: [],
    loading: false,
    character: "",
    nPages: 0,
    currentPage: 1,
    characterInfo: {},
  };

  const [state, dispatch] = useReducer(avatarReducer, Generalstate);

  const loadCharacters = async (pageNumber) => {
    setLoading();
    const characters = await axios.get(
      "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=" +
        CHARACTERS_PER_PAGE +
        "&page=" +
        pageNumber
    );

    //set load time to visualize gif
    // setTimeout(() => {
    //   dispatch({
    //     type: LOAD_CHARACTERS,
    //     payload: characters.data,
    //   });
    // }, 500);

    dispatch({
      type: LOAD_CHARACTERS,
      payload: characters.data,
    });
  };

  //update page
  const updatePage = async (pageNumber, name) => {
    const characters = await axios.get(
      "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=" +
        CHARACTERS_PER_PAGE +
        "&page=" +
        pageNumber +
        "&name=" +
        name
    );

    dispatch({
      type: UPDATE_CHARACTERS,
      payload: characters.data,
    });
  };

  //search specific character
  const search_Character = async (name, pageNumber) => {
    setLoading();
    //get number of pages
    const pages = await axios.get(
      "https://last-airbender-api.herokuapp.com/api/v1/characters?name=" + name
    );

    const character = await axios.get(
      "https://last-airbender-api.herokuapp.com/api/v1/characters?name=" +
        name +
        "&perPage=" +
        CHARACTERS_PER_PAGE +
        "&page=" +
        pageNumber
    );

    dispatch({
      type: SEARCH_CHARACTER,
      payload: {
        data: character.data,
        characterName: name,
        pages: Math.ceil(pages.data.length / 9),
      },
    });
  };

  //get character info
  const getCharacter = async (id) => {
    setLoading();
    const character = await axios.get(
      "https://last-airbender-api.herokuapp.com/api/v1/characters/" + id
    );

    character &&
      dispatch({
        type: GET_CHARACTER,
        payload: character.data,
      });
  };

  //clear character info
  const clearCharacter = () => {
    dispatch({
      type: CLEAR_CHARACTER,
    });
  };

  //set current page
  const setCurrentPage = (page) => {
    dispatch({
      type: SET_PAGE,
      payload: page,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  //get avatars
  const getAvatars = async () => {
    setLoading();
    const avatars = await axios.get(
      "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
    );
    dispatch({
      type: GET_AVATARS,
      payload: avatars.data,
    });
  };

  return (
    <AvatarContext.Provider
      value={{
        characters: state.characters,
        loading: state.loading,
        character: state.character,
        characterInfo: state.characterInfo,
        nPages: state.nPages,
        currentPage: state.currentPage,
        loadCharacters,
        updatePage,
        search_Character,
        getCharacter,
        clearCharacter,
        getAvatars,
        setCurrentPage,
      }}
    >
      {props.children}
    </AvatarContext.Provider>
  );
};

export default AvatarState;
