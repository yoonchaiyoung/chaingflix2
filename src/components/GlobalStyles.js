import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        /* background-color:rgba(20,20,20,1); */
        color: white;
        padding-top:50px;
        
    }
    html{
        /* width: 100%; */
        /* height: 100%; */
        /* background-size: inherit; */
        content: "";
        background: url("https://post-phinf.pstatic.net/MjAxODA5MDNfMTE2/MDAxNTM1OTYwMjc1NTE0.vB0P4_OUL5IKGb-v8cKatS5TOqsJcwZ3ngh33boHkQog.8ahILf3KKzKCGgWfSI5DQkMwg_MfeQVr7qUW47cnp_kg.PNG/0.png?type=w1200") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        /* position: absolute; */
        /* top: 0;
        left: 0; */
        z-index: -1;
        /* opacity: 0.5; */
    }
`;

export default globalStyles;
