import { createElement } from "react";
import { NewNoteInput } from "./components/NewNoteInput";
import { useDispatch, Provider, useSelector } from 'react-redux';
import { addNote } from "./actions/notesAction";
import { store, RootState } from "./store";

import "./ui/Test.css";
import { decreaseCounter, increaseCounter } from "./actions/counterActons";

export function App() {

    const counter = useSelector((state: RootState) => state.counter?.counter);
    const notes = useSelector((state: RootState) => state.notes?.notes);
    
    const dispatch = useDispatch();

    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    };

    const increment = () => dispatch(increaseCounter());
    const decrement = () => dispatch(decreaseCounter());


    console.log(store.getState())

    return (
        <Provider store={store}>
            <NewNoteInput addNote={onAddNote} />
            <hr />
                <ul>
                    {notes?.map(note => {
                        return <li key={note}>{note}</li>
                    })}
                </ul>
            <h1>Counter : {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </Provider>
    );
}
