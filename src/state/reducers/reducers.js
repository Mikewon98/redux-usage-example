import { combineReducers } from "redux";
import { Age, fName, Sex, Proff } from "./reducer";

export const reducers = combineReducers({
  firstName: fName,
  age: Age,
  sex: Sex,
  proff: Proff,
});
