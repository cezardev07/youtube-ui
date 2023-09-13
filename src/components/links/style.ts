import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 50%;
    right: 10px;
    transform: translateY(50%);

    display: flex;
    flex-direction: column;
    z-index: 10;
    
    a{
        svg{
            border-radius: 5px;
            padding: 5px;
            width: 50px;
            height: 50px;
        }
    }

    a.github{
        svg{
            background: #131313;
            fill: #ffffff;
        }
    }

    a.linkedin{
        svg{
            background: royalblue;
            fill: #ffffff;
        }
    }

    @media screen and (max-width: 970px){
        display: none;
    }
`