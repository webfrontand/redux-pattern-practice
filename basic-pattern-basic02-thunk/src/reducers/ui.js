import {
	SELECT_MENU
} from '../actions/types';
import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

const init = {
	selected: 'all'
}



export default handleActions({
  [SELECT_MENU]: (state, action) => ({
    selected: action.payload
  })
}, init)