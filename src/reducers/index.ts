import { combineReducers } from "redux";
import PokemonReducer from "./PokemonReducers";

const allReducers = combineReducers({
  PokemonReducer,
});

export default allReducers;
