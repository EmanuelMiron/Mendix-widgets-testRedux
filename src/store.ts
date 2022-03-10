import { createStore } from 'redux';
import { CounterState } from './reducers/counterReducer';
import reducers from './reducers/index';
import { NotesState } from './reducers/notesReducer';

export interface RootState {
    counter?: CounterState,
    notes?: NotesState
}

export const store = createStore(reducers);