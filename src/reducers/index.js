import { combineReducers } from 'redux';
import app from './app';
import records from './records';
import selected from './selected';

const reducer = combineReducers({
  app,
  records,
  selected
})

export default reducer