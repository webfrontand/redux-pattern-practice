import {
  PETCH_WAIT,
  PETCH_SUCCESS,
  PETCH_FAILURE,
  SELECT_MENU
} from './types';
import axios from 'axios';
import { createAction } from 'redux-actions';
import * as service from '../services/petch';

export const petchWait = createAction(PETCH_WAIT);

export const petchFailure = createAction(PETCH_FAILURE);

export const petchSuccess = () => ({
    type: PETCH_SUCCESS,
    payload: {
      promise: service.testinfo()
    }
});

export const selectMenu = (payload) => ({
	type: SELECT_MENU,
	payload
})

// export const petchSuccess = () => ({
//   type: PETCH_SUCCESS,
//   payload: {
//     promise: service.testinfo()
//   }
// })
