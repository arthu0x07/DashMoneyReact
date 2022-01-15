import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    :root{
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E62E4D;
        --titulos: #363F5F;
        --textos: #969CB3;
        --background: #F0F2F5;
        --maxwidth: 1120px;
    }

    html{
        font-size: 62.5%;

        @media (max-width: 1024px) {
            font-size: 60%;
        }
    }

`