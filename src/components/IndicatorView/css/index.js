import styled from 'styled-components';

export const IndicatorViewWrapper = styled.div`
          overflow: hidden;
          .indicator-content{
            display:flex;
            align-items:center;
            position:relative;
            transition:transform 250ms ease;
            > * {
      flex-shrink: 0;
    }
          }
`