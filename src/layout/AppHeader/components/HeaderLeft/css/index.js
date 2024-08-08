import styled from 'styled-components';

export const HeaderLeftWrapper = styled.div`
   flex:1;
   display:flex;
   align-items:center;
   color:${props=>props.theme.isAlpha?'#fff':props.theme.color.primaryColor};
   .logo{
      cursor:pointer;
      padding: 10px 20px;
   }
`