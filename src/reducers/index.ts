import { combineReducers } from 'redux';
import notes from './notesReducer';
import counter from './counterReducer';

export default combineReducers({
  notes,
  counter
})