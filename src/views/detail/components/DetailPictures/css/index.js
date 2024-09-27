import styled from 'styled-components';

export const DetailPicturesWrapper = styled.div`
   position: relative;
   .pictures{
     height:600px;
     display:flex;
     background-color:#000;
     &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
     .left{
        width: 50%;
        height: 100%;
        .item{
            position:relative;
            height:100%;
            overflow:hidden;
            cursor: pointer;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                transition:transform 0.3s ease-in; 
            }
            .cover{
                position:absolute;
                left:0;
                top:0;
                right:0;
                bottom:0;
                opacity:0;
                transition: opacity 200ms ease;
                background-color: rgba(0,0,0,.3);
            }
            &:hover {
        img {
          transform: scale(1.08);
        }
      }
        }
     }
     .right{
        width: 50%;
        height: 100%;
        display:flex;
        flex-wrap:wrap;
        .item{
            height:50%;
            position:relative;
            overflow:hidden;
            cursor: pointer;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                transition:transform 0.3s ease-in; 
            }
            .cover{
                position:absolute;
                left:0;
                top:0;
                right:0;
                bottom:0;
                opacity:0;
                transition: opacity 200ms ease;
                background-color: rgba(0,0,0,.3);
            }
            &:hover {
        img {
          transform: scale(1.08);
        }
      }
        }
     }
   }

   .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`