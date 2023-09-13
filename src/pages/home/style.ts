import { styled } from "styled-components";

export const Container = styled.section`
    .wrapper{
        max-width: 1920px;        
        margin: 0 auto;
    
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 20px;
        padding: 20px;

        .video-preview:hover{
            transition: all .3s ease;
            scale: 1.05;
        }
    }

    @media screen and (max-width: 710px){
        .wrapper{
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
                    }

                    .context{
                        justify-content: space-between;
                        gap: 5px;
                        padding: 2px;
                    }
                }
            }

            .video-preview:hover{
                scale: 1;
            }
        }
    }
`