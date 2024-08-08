import styled from 'styled-components';

export const HeaderRightWrapper = styled.div`
   flex:1;
   display:flex;
    justify-content:flex-end;
    align-items:center;
    .btns{
        display:flex;
            cursor:pointer;
            margin-right:10px;
            .btn{
                width:55px;
                height:40px;
                text-align:center;
                line-height:40px;
                color:${props=>props.theme.isAlpha?'#fff':'#484848'};
                font-weight:600;
            }
            .btn:hover{
                background-color:${props=>props.theme.isAlpha?'rgba(255,255,255,0.2)':'#f1f1f1'};
                border-radius:40%;
            }
            .login-btn{
                margin-right:25px;
            }
            .register-btn{
                margin-right:25px;
            }
            .global-btn{
                border-radius:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                width:40px;
                height:40px;
            }
    }
    .profile{
        display:flex;
        justify-content:center;
        align-items:center;
        padding:5px;
        border: 1px solid #ccc;
        width:75px;
        height:35px;
        border-radius:25px;
        margin-right:20px;
        background-color:#fff;
        position:relative;
        cursor:pointer;
        &:hover{
            box-shadow: 0 2px 4px rgba(0,0,0,.18);
        }
        .icon-menu{
            margin-right:10px;
        }
        .user-panel{
            position:absolute;
            top:54px;
            right:0;
            width:240px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 6px rgba(0, 0, 0, .2);
            color: #666;
            font-weight:600;
            .login-register{
                border-bottom: 1px solid #ddd;
                padding:10px 0;
                display:flex;
                align-items:center;
                height:80px;
                .login{
                    margin-left:20px;
                    margin-right:20px;
                }
                .register{
                    margin-left:20px;
                }
            }
            .bottom-panel{
                padding:10px 20px;
                .row{
                  height:40px;
                  line-height:40px;
                }
            }
        }
    }
`