import styled from 'styled-components';

export const HomeTabsWrapper = styled.div`
     .tab-item{
        box-sizing: border-box;
        flex-shrink: 0;
        min-width:120px;
        padding: 14px 16px;
        margin-right: 16px;
        border-radius: 3px;
        font-size: 17px;
        text-align: center;
        border: 0.5px solid #D8D8D8;
        white-space: nowrap;
        cursor: pointer;
        transition: box-shadow 200ms ease;
     }
     .active-item{
        color:#fff;
        background-color:#00848A;
     }
`