import { combineReducers } from 'redux';
import updateCurrentImage from './reducers';


export default combineReducers({
  count: updateCurrentImage
});
