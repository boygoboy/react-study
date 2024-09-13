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

     .slider{
        position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }

    .indicator {
    position: absolute;
    z-index: 9;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 30%;
    margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
     }
`