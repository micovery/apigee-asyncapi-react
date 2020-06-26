import React from "react";
import AsyncApiComponent from "@kyma-project/asyncapi-react";
import { specMock } from "./mock";
import "@kyma-project/asyncapi-react/lib/styles/fiori.css";
import "./styles.css";


function getSpec() {
    let drupalSettings = window.drupalSettings || {};
    console.log(drupalSettings);
    let spec = specMock;
    if (drupalSettings &&
        drupalSettings['asyncapi'] &&
        drupalSettings['asyncapi']['spec-url']) {
        spec = {
            url: drupalSettings['asyncapi']['spec-url']
        }
    }
    return spec;
}


const App = () => <AsyncApiComponent schema={getSpec()} />;

export default App;
