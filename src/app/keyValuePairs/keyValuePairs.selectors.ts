import { State } from "./keyValuePairs.reducers";

export const selectKeyValuePairs = (state: State) => state.keyValuePairs;
export const selectEditingIndex = (state: State) => state.editingIndex;
