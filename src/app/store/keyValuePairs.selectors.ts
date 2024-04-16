import { State } from "../store/keyValuePairs.reducers";

export const selectKeyValuePairs = (state: State) => state.keyValuePairs;
export const selectEditingIndex = (state: State) => state.editingIndex; 