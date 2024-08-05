import React,{memo} from 'react';
import { HeaderWrapper } from './css';
import HeaderCenter from './components/HeaderCenter';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
  const AppHeader = memo(() => {
    
    return (
        <HeaderWrapper>
            <div className='header'>
                <HeaderLeft/>
                <HeaderCenter/>
                <HeaderRight/>
            </div>
        </HeaderWrapper>
    )
})

export default AppHeader;   