import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    
    :root{
    font-size: 62.5%;
    }

    *{
        height: fit-content;

        padding: 0;
        margin: 0;
    }

    html{
        overflow-y: scroll;
    }

    html::-webkit-scrollbar{
        width: 20px;
        position: absolute;
    }

    html::-webkit-scrollbar-thumb{
        background-color: #121212;
        border-radius: 2px;
    }
`

export default globalStyle;