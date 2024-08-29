import styled from 'styled-components';

export const CityRoomWrapper = styled.div`
      display:flex;
      flex-shrink:0;
      width:20%;
      .inner-box{
        padding:8px;
        .room{
            position:relative;
            border-radius:3px;
            overflow:hidden;
            .img-fill{
            width:100%;
        }
        .cover{
            position:absolute;
            bottom:0;
            left:0;
            right:0;
            height:60%;
            background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
        }
        .bottom-info{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            position:absolute;
            bottom:0;
            left:8px;
            right:8px;
            padding:0 24px 32px;
            color:#fff;
            .city-name{
                font-size:16px;
                font-weight:600;
            }
            .price-info{
                font-size:14px;
                margin-top:4px;
            }
        }
        }
      }
`