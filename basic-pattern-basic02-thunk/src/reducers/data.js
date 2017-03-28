import {
  PETCH_WAIT,
  PETCH_SUCCESS,
  PETCH_FAILURE
} from '../actions/types';
import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

const init = {
  info: [],
  status: 'BASIC'
};

export default function data(state = init, action){
  switch (action.type) {
    case PETCH_WAIT + '_PENDING':
      return update(state, {
        status: { $set: 'WAIT' }
      });
    case PETCH_SUCCESS + '_FULFILLED':
      return update(state, {
        status: { $set: 'SUCCESS' },
        info: { $set: action.payload.data }
      });
    case PETCH_FAILURE + '_REJECTED':
      return update(state, {
        status: { $set: 'FAILURE' }
      });
    default:
      return state;
  }
}

// export default handleActions({
//   [PETCH_WAIT]: (state, action) => ({
//     status: 'WAIT'
//   }),
//   [PETCH_SUCCESS]: (state, action) => ({
//     status: 'SUCCESS',
//     info: action.payload
//   }),
//   [PETCH_FAILURE]: (state, action) => ({
//     status: 'FAILURE'
//   })
// }, init)
