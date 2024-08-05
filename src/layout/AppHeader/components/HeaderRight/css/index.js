import styled from 'styled-components';

export const HeaderRightWrapper = styled.div`
   flex:1;
   display:flex;
    justify-content:flex-end;
    align-items:center;
    .btns{
        display:flex;
        .btn{
            cursor:pointer;
            .login-btn{
                margin-right:25px;
            }
            .register-btn{
                margin-right:25px;
            }
            .global-btn{
                margin-right:15px;
            }
        }
    }
`