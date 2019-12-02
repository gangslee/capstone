import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기

const theme = createMuiTheme({
    typography:{
        useNextVariants : true,
        fontFamily : "Noto Sans KR"
    }
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<BrowserRouter>
    <App />
</BrowserRouter>
</MuiThemeProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
