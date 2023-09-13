import { styled } from "styled-components";

export const Container = styled.section`
    ul{
        max-width: 700px;
        margin: 0 auto;
    
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        padding: 20px;

        .video-preview{
            flex-direction: row;
            .thumbnail{
                width: auto;
                img{
                    width: 310px;
                }
            }
            .content{
                flex-direction: row-reverse;

                .channel{
                    display: none;
                }

                .context{
                    justify-content: space-between;
                    gap: 5px;
                    padding: 2px;
                }
            }
        }

        .default{
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
    }
    
    @media screen and (max-width: 710px){
        ul{
            padding: 0;
            .video-preview{
                flex-direction: column;
                .thumbnail{
                    width: auto;
                    img{
                        width: 100%;
                        border-radius: 0;
                    }
                }
                .content{
                    flex-direction: row;
                    padding-left: 5px;
                    .channel{
                        display: block;
                    }

                    .context{
                        justify-content: space-between;
                        gap: 5px;
                        padding: 2px;
                    }
                }
            }
        }
    }
`