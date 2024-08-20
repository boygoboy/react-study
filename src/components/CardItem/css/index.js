import styled from "styled-components";

export const CardItemWrapper = styled.div`
     flex-shrink:0;
     box-sizing:border-box;
     width:${props=>props.$cardWidth};
     padding:8px;
     .inner{
        width:100%;
       
        .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

     }
`