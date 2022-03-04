import { createElement } from "react";
import { Provider } from 'react-redux';
import { store } from "./store";

// import { TestContainerProps } from "../typings/TestProps";

import "./ui/Test.css";
import { App } from "./App";

// export function Test({ sampleText }: TestContainerProps): ReactElement {
//     return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
// }


export function Test() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
