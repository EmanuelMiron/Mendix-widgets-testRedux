import { ReactElement, createElement } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";

export function preview(): ReactElement {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export function getPreviewCss(): string {
    return require("./ui/Test.css");
}
