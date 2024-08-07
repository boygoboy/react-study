import styled from 'styled-components';

export const ScrollViewWrapper = styled.div`
      position:relative;
       .scroll-view{
        overflow:hidden;
        .scroll-view-content{
            display:flex;
            align-items:center;
            transition:transform 250ms ease;
        }
       }
       .btn{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            text-align: center;
            border-width: 2px;
            border-style: solid;
            border-color: #fff;
            background: #fff;
            box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .14);
            cursor: pointer;
       }
       .left-btn{
            position:absolute;
            z-index:9;
            left:0;
            top:50%;
            transform:translate(-50%,-50%);
       }
       .right-btn{
            position:absolute;
            z-index:9;
            right:0;
            top:50%;
            transform:translate(50%,-50%);
       }

`