import { notesAction } from "../actions/notesAction"

export interface NotesState {
  notes: string[]
}

const initialState = {
  notes: ["test", "testing"]
}

export default function notesReducer(state:NotesState = initialState, action: notesAction){
  switch(action.type){
    case "ADD_NOTE": {
      return {...state, notes: [...state.notes, action.payload]}
    }
    default:
      return state
  }
}