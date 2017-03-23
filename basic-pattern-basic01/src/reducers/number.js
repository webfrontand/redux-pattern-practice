import {
  INCREMENT,
  DECREMENT,
  CLEAR
} from '../actions/types';

const init = {
  num: 0
}

export default function number(state = init, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        num: state.num + 1
      }
    case DECREMENT:
      return {
        num: state.num + -1
      }
    case CLEAR:
      return {
        num: 0
      }
    default:
      return init;
  }
}
