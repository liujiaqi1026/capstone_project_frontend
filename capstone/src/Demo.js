import axios from "axios";
import React from "react";
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
    const [get, setGet] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGet(response.data);
        });
    }, []);

    return (
        <></>
    );

    // process the logic.
}

export default App;