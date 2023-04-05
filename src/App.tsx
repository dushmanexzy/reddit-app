import React from "react";
import './main.global.css';
import {hot} from "react-hot-loader/root";

function AppComponent() {
    return (
        <>
            MyApp
        </>
    )
}

export const App = hot(AppComponent);