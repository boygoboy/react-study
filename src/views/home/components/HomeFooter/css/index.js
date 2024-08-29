import styled from "styled-components";

export const HomeFooterWrapper = styled.div`
       margin:10px 0;
      .footer-box{
        display:flex;
        align-items:center;
        color:${props=> props.$color };
        .footer-content{
        font-size:17px;
        font-weight:700;
        cursor:pointer;
        margin-right:5px;
      }
      &:hover{
        text-decoration:underline;
      }
      }
`