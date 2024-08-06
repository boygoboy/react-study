import styled from "styled-components"

export const HeaderWrapper = styled.div`
    .header{
      position:fixed;
      z-index:99;
      top:0;
      left:0;
      right:0;
      height:85px;
      border-bottom:1px solid #eee;
      background-color:#fff;
      .top{
        display:flex;
        align-items: center;
        padding:10px 0px;
      }
      .bottom{
        background-color:#fff;
      }
    }
    .cover{
        position:fixed;
        top:0;
        z-index:9;
        left:0;
        right:0;
        bottom:0;
        background-color:rgba(0,0,0,.2);
    }
`

export const SubHeaderWrapper = styled.div`
     height: ${props=>props.isSearch?'100px':'0px'};
     background-color:#fff;
`