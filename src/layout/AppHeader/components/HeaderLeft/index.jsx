import React,{memo} from 'react';
import { useNavigate } from 'react-router-dom'
import { HeaderLeftWrapper } from './css';
import IconLogo from '@/assets/svg/icon_logo';
 const HeaderLeft = memo(() => {
    const router=useNavigate();
    function toHome(){
     router('/home')
    }
   return (
       <HeaderLeftWrapper>
        <div className="logo" onClick={e=>toHome()}>
        <IconLogo/>
        </div>
       </HeaderLeftWrapper>
   )
})

export default HeaderLeft;