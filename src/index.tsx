import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline} from '@material-ui/core';
import MUIThemeContext from 'context/Theme';
import AppContext from 'context/App';

declare global {
    interface Window {
        console:any;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <AppContext>
            <MUIThemeContext>
                <CssBaseline/>
                <App/>
            </MUIThemeContext>
        </AppContext>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
