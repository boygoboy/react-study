import styled from "styled-components";

export const CardItemWrapper = styled.div`
     flex-shrink:0;
     box-sizing:border-box;
     width:${props=>props.$cardWith}px;
     padding:8px;
     .inner{
        width:100%;
     }
`