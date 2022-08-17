import { Action } from "@ngrx/store";

export function simpleReducer(state: string = 'this is test string', action: Action){
  return action.type
}
