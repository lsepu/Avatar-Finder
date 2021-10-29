import {
  LOAD_CHARACTERS,
  SET_LOADING,
  SEARCH_CHARACTER,
  GET_CHARACTER,
  CLEAR_CHARACTER,
  GET_AVATARS,
  UPDATE_CHARACTERS,
  SET_PAGE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        nPages: 56,
        character: "",
        loading: false,
      };
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
    case SEARCH_CHARACTER:
      return {
        ...state,
        characters: action.payload.data,
        character: action.payload.characterName,
        nPages: action.payload.pages,
        loading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        characterInfo: action.payload,
      };
    case CLEAR_CHARACTER:
      return {
        ...state,
        characterInfo: [],
      };
    case GET_AVATARS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
  }
};
