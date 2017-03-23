import{
  INCREMENT,
  DECREMENT,
  CLEAR,
  TEST
} from './types';
import { createAction } from 'redux-actions';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const clear = createAction(CLEAR);
export const test = createAction(TEST);

// export function increment(){
//   return {
//     type: INCREMENT
//   }
// }
//
// export function decrement(){
//   return {
//     type: DECREMENT
//   }
// }
//
// export function clear(){
//   return {
//     type: CLEAR
//   }
// }
