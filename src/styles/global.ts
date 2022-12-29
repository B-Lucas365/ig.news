import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #ffffff;

        --grey-50:#e1e1e6;
        --grey-300:#a8a8b3;
        --grey-900: #121214;

        --cyan-500: #61dafb;
        --yellow-500: #eba417;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--grey-900);
        color: var(--white);
    }

    body, input, textarea, select, button {
        font: 400 1rem 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        color: indianred;
        text-decoration: none;

    }
`