import styled from "styled-components"

export const HeaderWrapper = styled.div`
    &.fixed{
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:999;
    }
    .header{
      height:85px;
      position:relative;
      transition: all 250ms ease;
      border-bottom:1px solid #eee;
      border-bottom-color:${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};
      background-color:${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};
      z-index:99;
      .top{
        display:flex;
        align-items: center;
        padding:10px 0px;
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
     height: ${(props) => props.$isSearch ? "100px" : "0"};
     background-color:${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};
     transition: height 250ms ease;
`