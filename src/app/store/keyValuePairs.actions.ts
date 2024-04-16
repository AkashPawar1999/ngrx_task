import { createAction, props } from "@ngrx/store";

export const addKeyValuePair = createAction('[store] Add keyValue ',
props<{ key: string, value:string }>());

export const concatKeyValuePair = createAction('[store] concatenate key Value',
props<{ key1: string, key2: string }>());

export const editKeyValuePair = createAction('[store] Edit keyValue ',
props<{ index: number, key: string, value: string }>());



