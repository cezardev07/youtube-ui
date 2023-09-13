import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    @media screen and (max-width: 700px){
        display: none;
    }
`

export const Value = styled.div<{width : string}>`
    height: 5px;
    background: red;
    transition: all .1s ease;
    width: ${({width}) => width};
`