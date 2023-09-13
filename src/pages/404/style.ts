import styled from "styled-components";

export const Container = styled.section`
    .wrapper{
        min-height: calc(100vh - 200px);
        max-width: 1200px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 10px;
        
        
        img{
            width: 100px;
        }

        h2{
            text-transform: capitalize;
        }

        a:hover{
            color: royalblue;
        }
    }
`