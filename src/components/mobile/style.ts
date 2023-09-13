import styled from "styled-components";

export const Container = styled.nav`
    position: sticky;
    bottom: 0;
    left: 0;

    width: 100%;

    background: #ffffff;
    color: #121212;

    padding: 5px;
    z-index: 5;

    display: none;

    ul{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;
        
        button{
            cursor: pointer;
            border: none;
            background: #12121212;
        }

        a,button{
            border-radius: 5px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            
            svg{
                width: 30px;
            }
        }
        
        a:nth-child(1){
            svg{
                background: #ffffff;
                fill: #131313;
            }
        }
    
        a:nth-child(2){
            svg{
                background: #ffffff;
                fill: royalblue;
            }
        }

        a:hover{
            background: #12121212;
        }

        a:active,button:active{
            background: #ddd;
        }
    }

    @media screen and (max-width: 970px){
        display: block;
    }
`