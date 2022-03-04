import { createElement } from "react";
import { NewNoteInput } from "./components/NewNoteInput";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";
import { store } from "./store";

// import { TestContainerProps } from "../typings/TestProps";

import "./ui/Test.css";

// export function Test({ sampleText }: TestContainerProps): ReactElement {
//     return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
// }


export function App() {

    const notes = useSelector<NotesState, NotesState["notes"]>(
        (state) => state.notes
    );
    const dispatch = useDispatch();

    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    };

    return (
        <Provider store={store}>
            <NewNoteInput addNote={onAddNote} />
            <hr />
            <ul>
                {notes.map((note) => {
                    return <li key={note}>{note}</li>;
                })}
            </ul>
        </Provider>
    );
}
