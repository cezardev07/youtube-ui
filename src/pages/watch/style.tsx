import styled from "styled-components";

export const Container = styled.section`
    .wrapper{
        position: relative;
        max-width: 1712px;
        margin: 0 auto;    
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 0 10px;

        .wrapper-watch{
            flex: 1;

            .watch-video{
                .video{
                    width: 100%;
                    
                    iframe{
                        aspect-ratio: 16/9;
                        width: 100%;
                        border: none;
                    }
                }
                .description{
                    button{
                        height: 35px;
                        cursor: pointer;

                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 4px;

                        font-weight: 500;
                        color: #121212;
                        
                        white-space: nowrap;

                        svg{
                            width: 20px;
                            fill: #121212;
                        }

                        .ellipsis{
                            border-radius: 50%;
                        }

                    }

                    .heading{
                        margin: 10px 0;
                        h3{
                            font-weight: 500;
                        }
                    }
                    nav{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        ul{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        ul.ul-channel{
                            gap: 15px;
                            .avatar{
                                img{
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                }
                            }
    
                            .subscribe{
                                button{
                                    background: #121212;
                                    color: #ffffff;
                                    padding: 10px 20px;
                                    border: none;
                                    border-radius: 50px;
                                }                     
                                button:hover{
                                    background: #2b2b2b;
                                }
                            }
                        }

                        ul.ul-interactions{
                            gap: 10px;

                            div{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                
                                border-radius: 50px;
                                overflow: hidden;
                                button{
                                    background: #e8e8e8;
                                    padding: 10px;
                                    border: none;
                                }
                                button.disliked{
                                    border-left: solid 1px #121212;
                                }
                                button:hover{
                                    background: #ddd;
                                }
                            }
                        }
                    }
                }
            }
        }

        .recommended{
            width: 400px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .video-preview{
                flex-direction: row;
                .thumbnail{
                    width: auto;
                    aspect-ratio: 16/9;
                    img{
                        width: 180px;
                        height: 100%;
                        border-radius: 0px;
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
        }
    }

    @media screen and (max-width: 1190px){
        .wrapper{
            .wrapper-watch{
                .watch-video{
                    .description{
                        button{
                            gap: 4px;
                            font-size: 12px;
                            svg{
                                width: 15px;
                            }
                        }
                        nav{
                            gap: 15px;
                            ul.ul-channel{
                                .wrapper-info{
                                    .name{
                                        font-size: 12px;
                                        white-space: nowrap;
                                    }
                                    .subs{
                                        font-size: 10px;
                                        white-space: nowrap;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 970px){
      .wrapper{
        flex-direction: column;

        .wrapper-watch{
            .watch-video{
                .video{
                    width: 100%;
                    iframe{
                        aspect-ratio: 16/9;
                        width: 100%;
                        border: none;
                    }
                }
                .description{
                    display: none;
                }
            }
        }

        .recommended{
            width: 100%;
        }
      }  
    }
    @media screen and (max-width: 550px){
        .wrapper{
            padding: 0;
            .wrapper-watch{
                position: sticky;
                top: 70px;
                z-index: 5;
            }
            .recommended{
                margin-top: -10px;
                padding: 0 3px;
                gap: 3px;
            }
        }
    }
`