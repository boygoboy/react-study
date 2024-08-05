import React,{memo} from 'react';
import { HeaderRightWrapper } from './css';
import IconGlobal from '@/assets/svg/icon_global';

 const HeaderRight = memo(() => {

   return (
       <HeaderRightWrapper>
        <div className="btns">
            <div className="login-btn">登录</div>
            <div className="register-btn">注册</div>
            <IconGlobal className="global-btn" />
        </div>
       </HeaderRightWrapper>
   )
})

export default HeaderRight;