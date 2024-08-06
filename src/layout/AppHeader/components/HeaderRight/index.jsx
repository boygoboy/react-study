import React,{memo,useState,useEffect} from 'react';
import { HeaderRightWrapper } from './css';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import IconAvatar from '@/assets/svg/icon_avatar';

 const HeaderRight = memo(() => {
    const [isShowInfoPanel,setIsShowInfoPanel] = useState(false);
    function openInfoPanel(){
        setIsShowInfoPanel(true);
    }
    
    function closeInfoPanel(){
        setIsShowInfoPanel(false);
    }

    useEffect(()=>{
    window.addEventListener('click',closeInfoPanel,true)
        return ()=>{
            window.removeEventListener('click',closeInfoPanel,true)
        }
    },[])

   return (
       <HeaderRightWrapper>
        <div className="btns">
            <div className="login-btn btn">登录</div>
            <div className="register-btn btn">注册</div>
            <div className="btn global-btn">
            <IconGlobal />
            </div>
        </div>
        <div className="profile" onClick={e=>openInfoPanel()}>
            <span className='icon-menu'>
            <IconMenu />
            </span>
            <span className='icon-avatar'>
            <IconAvatar />
            </span>
            {
                isShowInfoPanel&&(
                    <div className="user-panel">
                    <div className="login-register">
                        <div className="login">登录</div>
                        <div className="register">注册</div>
                    </div>
                    <div className="bottom-panel">
                        <div className="row">
                            <span>出租房源</span>
                        </div>
                        <div className="row">
                            <span>开展体验</span>
                        </div>
                        <div className="row">
                            <span>帮助</span>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
       </HeaderRightWrapper>
   )
})

export default HeaderRight;