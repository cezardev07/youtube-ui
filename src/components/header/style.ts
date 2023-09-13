import styled from "styled-components";

export const Container = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    background: #ffffff;
    padding: 20px;
    padding-top: 10px;

    width: 100%;

    nav{
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;

        .logo{
            svg{
                width: 90px;
            }
        }
        form{
            width: 640px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;

            input{
                width: 100%;
                height: 40px;
                padding: 5px 10px;
                font-size: 20px;
                border: solid 1px #1212123b;
                border-right: none;
                background: transparent;
                outline: none;
                border-radius: 4px 0px 0px 4px;
            }
            input:hover, input:focus{
                box-shadow: 0px 0px 2px 1px #1212123b;
            }

            button{
                height: 40px;
                width: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: solid 1px #1212123b;
                border-radius: 0px 4px 4px 0px;
                background: #12121212;
            }
            button:hover{
                background: #ddd;
            }
            input:hover + button{
                box-shadow: 0px 0px 2px 1px #1212123b;
            }
            input:focus + button{
                box-shadow: 0px 0px 2px 1px #1212123b;
            }
        }

        .wrapper-buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            button{
                cursor: pointer;
                width: 40px;
                height: 40px;

                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;

                border: none;
                background: #ffffff;
                background: #12121212;
            }
            button.profile{
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

            button.created-video:hover,
            button.notification:hover 
            {
                background: #ddd;
            }
        }
    }

    @media screen and (max-width: 550px){
        padding: 20px 10px;
        nav{
            form{
                input{
                    font-size: 15px;
                }
            }
            .wrapper-buttons{
                button{
                    font-size: 12px;
                }
                button.created-video,
                button.notification
                {
                    display: none;
                }
            }
        }
    }
`