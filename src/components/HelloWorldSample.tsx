import React, { ReactElement, createElement } from "react";

export interface HelloWorldSampleProps {
    sampleText?: string;
}

// export function HelloWorldSample({ sampleText }: HelloWorldSampleProps): ReactElement {
//     return <div className="widget-hello-world">Hello {sampleText}</div>;
// }


export function HelloWorldSample({sampleText}: HelloWorldSampleProps): ReactElement {
    return (
        <React.Fragment>
            <h1>Test</h1>
            <hr />
            <ul>
                <li>{sampleText}</li>
            </ul>
        </React.Fragment>
    )
}