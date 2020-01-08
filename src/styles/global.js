import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    
    *
    {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html {
    overflow: scroll;
    overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        background: #FF0000;
    }

    *:focus{
        outline: 0;
    }

    html,body,#root{
        height: 100%;
    }

    body{
        -webkit-font-smoothing: antialised;
    }
    input
    {
        border: 0;
    }
    body,input,button
    {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

    a
    {
        text-decoration: none
    }

    ul
    {
        list-style: none;
    }

    button
    {
        cursor: pointer;
        background: none;
        border: 0;
    }

`;
