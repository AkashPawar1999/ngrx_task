import { createReducer, on } from "@ngrx/store";
import * as keyValuePairsActions from '../store/keyValuePairs.actions'

export interface State {
    keyValuePairs: { key: string, value: string }[];
    editingIndex: number | null;
};

export const initialState: State = {
    keyValuePairs: [],
    editingIndex: null
};

export const keyValuePairsReducer = createReducer(
    initialState,
    on(keyValuePairsActions.addKeyValuePair, (state, { key, value }) => ({
        ...state,
        keyValuePairs: [...state.keyValuePairs, { key, value }]
    })),

    on(keyValuePairsActions.concatKeyValuePair, (state, { key1, key2 }) => ({
        ...state,
        keyValuePairs: [...state.keyValuePairs, { key: key1, value: key2 }],
        editingIndex: null,
    })),

    on(keyValuePairsActions.editKeyValuePair, (state, {index, key, value}) => {
        const updatedKeyValuePairs = [...state.keyValuePairs];
        updatedKeyValuePairs[index] = {key, value};
        return {...state, keyValuePairs: updatedKeyValuePairs};
    })
)

