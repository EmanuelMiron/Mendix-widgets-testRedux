import { ReactElement, createElement } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";
import { store } from "./store";
import { NewNoteInput } from "./components/NewNoteInput";

export function preview(): ReactElement {
    
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

export function getPreviewCss(): string {
    return require("./ui/Test.css");
}
