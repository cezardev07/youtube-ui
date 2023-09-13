import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    .banner{
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 16/2;
        img{
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }

    .heading-channel{
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 20px;

        .avatar{
            img{
                width: 100px;
                height: 100px;

                border-radius: 50%;
                border: none;

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .about{
            flex: 1;                
            .bio{
                margin: 5px 0;
                font-size: 13px;
                strong{
                    font-weight: 500;
                    margin-right: 10px;
                }
                margin-bottom: 10px;
            }
            p{
                font-size: 12px;
            }
        }

        .subscribe{
            button{
                cursor: pointer;
                background: #121212;
                color: #ffffff;
                padding: 10px 20px;
                border: none;
                border-radius: 50px;
                white-space: nowrap;
            }
            button:hover{
                background: #2b2b2b;
            }
        }
    }

    .heading-content{
        position: sticky;
        top: 70px;
        left: 0;
        z-index: 5;

        border-bottom: solid 1px #e5e5e5; 
        background: #ffffff;       
        ul{
            max-width: 1200px;
            margin: 0 auto;
            padding: 0px 10px;

            display: flex;
            align-items: center;
            gap: 10px;

            a{
                border-bottom: solid 2px #606060;
                padding: 10px 20px;
                font-size: 15px;
                font-weight: 500;
                margin-bottom: -1px;
            }
            a:hover{
                background: #12121212;
            }
        }
    }
    .wrapper{
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 10px;


        .content{

            .wrapper-video{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 10px;
                row-gap: 25px;
                .channel{
                    display: none;
                }
                .context{
                    .name-channel{
                        display: none;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 528px){
        .banner{
            aspect-ratio: 16/5;
        }
        .heading-channel{
            flex-direction: column;
            .about{
                text-align: center;
            }
            .subscribe{
                width: 100%;
                button{
                    padding: 15px 20px;
                    width: 100%;
                    font-size: 15px;
                    border-radius: 5px;
                }
            }
        }
        
        .wrapper{
            .content{
                .wrapper-video{
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                }
            }
        }
    }
`