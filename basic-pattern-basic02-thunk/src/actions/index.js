import {
  PETCH_WAIT,
  PETCH_SUCCESS,
  PETCH_FAILURE
} from './types';
import axios from 'axios';
import { createAction } from 'redux-actions';
import * as service from '../service/petch';

export function ReqeustPetch(){
  return (dispatch) => {
    dispatch(petchWait());
    return axios.get('http://jsonplaceholder.typicode.com/posts/').
    then(response => {
      dispatch(petchSuccess(response.data));
    }).catch(error => {
      dispatch(petchFailure());
    })
  }
}

export const petchWait = createAction(PETCH_WAIT);

export const petchFailure = createAction(PETCH_FAILURE);

export const petchSuccess = () => ({
  type: PETCH_SUCCESS,
  payload: {
    promise: service.testinfo()
  }
})
