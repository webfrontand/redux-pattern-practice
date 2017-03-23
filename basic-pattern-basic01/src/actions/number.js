import{
  INCREMENT,
  DECREMENT,
  CLEAR
} from './types';

export function increment(){
  return {
    type: INCREMENT
  }
}

export function decrement(){
  return {
    type: DECREMENT
  }
}

export function clear(){
  return {
    type: CLEAR
  }
}
