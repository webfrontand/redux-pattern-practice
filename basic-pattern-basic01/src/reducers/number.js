import {
  INCREMENT,
  DECREMENT,
  CLEAR,
  TEST
} from '../actions/types';
import { handleActions } from 'redux-actions';

const init = {
  num: 0
}

export default handleActions({
  [INCREMENT]: (state, action) => ({
    num: state.num + 1
  }),
  [DECREMENT]: (state, action) => ({
    num: state.num - 1
  }),
  [CLEAR]: (state, action) => ({
    num: 0
  }),
  [TEST]: (state, action) => ({
    num: -1
  })
}, init);
// export default function number(state = init, action) {
//   switch(action.type) {
//     case INCREMENT:
//       return {
//         num: state.num + 1
//       }
//     case DECREMENT:
//       return {
//         num: state.num + -1
//       }
//     case CLEAR:
//       return {
//         num: 0
//       }
//     case TEST:
//       return {
//         num: -1
//       }
//     default:
//       return init;
//   }
// }
