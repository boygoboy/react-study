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
     .title-content{
       font-size:12px;
       color:#767676;
       font-weight:700;
       margin-top:8px;
     }
     .desc-content{
      font-size:17px;
      font-weight:700;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box;
     -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
      margin-top:5px;
     }
     .price-info{
         font-size:14px;
         color:#484848;
         margin:8px 0;
     }
     .review-info{ 
       display:flex;
       color:#484848;
       font-weight:600;
       font-size:12px;
     }
`