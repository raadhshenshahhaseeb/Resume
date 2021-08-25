import './App.css';
import {BrowserRouter} from "react-router-dom";
import RootBackground from "./components/Layout/Background/rootbackground";
import React from "react";
import Projects from "./components/Projects/Projects";
import Header from "./components/Layout/header/header";
import Stack from "./components/Stack/Stack";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <RootBackground/>

            <Projects/>
            <Stack/>
        </BrowserRouter>

    )
        ;
}

export default App;
