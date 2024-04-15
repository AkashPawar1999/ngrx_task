import { State } from "../store/keyValuePairs.reducers";
import { createSelector } from "@ngrx/store";

export const selectKeyValuePairs = (state: State) => state.keyValuePairs;
export const selectEditingIndex = (state: State) => state.editingIndex;    