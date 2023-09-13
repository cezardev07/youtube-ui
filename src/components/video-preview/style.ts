import styled from "styled-components";

import { keyframes } from "styled-components";

const op = keyframes`
    0%{
        opacity: -1;
    }
    100%{
        opacity: 1;
    }
`

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    gap: 10px;

    text-decoration: none;
    animation: ${op} .3s ease;
    
    .thumbnail{
        width: 100%;
        cursor: pointer;
        aspect-ratio: 16/9;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
            transition: all .3s ease;

            aspect-ratio: 16/9;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .content{
        display: flex;
        gap: 10px;

        .channel{
            img{
                border-radius: 50%;
                width: 40px;
                height: 40px;
            }
        }

        .context{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
            .description{
                p{
                    font-size: 15px;
                    font-weight: 500;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    -webkit-box-orient: vertical; 
                }
            }
            .name-channel,.date{
                font-size: 14px;
            }
            
            .name-channel{
                display: -webkit-box;
                -webkit-line-clamp: 1;
                overflow: hidden;
                -webkit-box-orient: vertical; 
            }
        }
    }
    
    &:hover .thumbnail img{
        border-radius: 0px;
    }
`