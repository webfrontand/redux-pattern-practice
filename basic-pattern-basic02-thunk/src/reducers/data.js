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

export default handleActions({
  [PETCH_WAIT]: (state, action) => ({
    status: 'WAIT'
  }),
  [PETCH_SUCCESS]: (state, action) => ({
    status: 'SUCCESS',
    info: action.payload
  }),
  [PETCH_FAILURE]: (state, action) => ({
    status: 'FAILURE'
  }),
}, init)
