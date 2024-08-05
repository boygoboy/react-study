import React,{memo} from 'react';
import { HeaderCenterWrapper } from './css';

 const HeaderCenter = memo(() => {

   return (
       <HeaderCenterWrapper>
           <div className='header-center'>center</div>
       </HeaderCenterWrapper>
   )
})

export default HeaderCenter;