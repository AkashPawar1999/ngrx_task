import { createAction, props } from "@ngrx/store";

export const addKeyValuePair = createAction('[keyValuePairs] Add keyValue ',
props<{ key: string, value:string }>());

export const concatKeyValuePair = createAction('[keyValuePairs] concatenate key Value',
props<{ key1: string, key2: string }>());

export const editKeyValuePair = createAction('[keyValuePairs] Edit keyValue ',
props<{ index: number, key: string, value: string }>());



