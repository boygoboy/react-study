import React,{memo,useState,useRef,useEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import { HeaderWrapper,SubHeaderWrapper } from './css';
import HeaderCenter from './components/HeaderCenter';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
import {useScrollPosition} from '@/hooks';
import classNames from 'classnames'
  const AppHeader = memo(() => {
    const [isSearch, setIsSearch] = useState(false)
    const {scrollY}=useScrollPosition();
    const lastScrollY=useRef(0);
    const {headerConfig}=useSelector(state=>({
        headerConfig:state.system.headerConfig
    }),shallowEqual);
    const {isFixed,topAlpha}=headerConfig;
    useEffect(() => {
        if (!isSearch) {
          lastScrollY.current = scrollY;
        }
        if (isSearch && Math.abs(scrollY - lastScrollY.current) > 30) {
          setIsSearch(false);
        }
      }, [scrollY, isSearch]);

    const isAlpha=scrollY===0&&topAlpha;
    return (
        <ThemeProvider theme={{isAlpha}}>
        <HeaderWrapper className={classNames({ fixed: isFixed })}>
            <div className='header'>
                <div className="top">
                <HeaderLeft/>
                < HeaderCenter isSearch={isSearch|| isAlpha} clickSearch={(isSarch)=>setIsSearch(isSarch)} />
                <HeaderRight/>
                </div>
                <SubHeaderWrapper $isSearch={isSearch||isAlpha}>
                </SubHeaderWrapper>
            </div>
            {
                isSearch&&(
                    <div className="cover" onClick={e=>setIsSearch(false)}>
              </div>
                )
            }

        </HeaderWrapper>
        </ThemeProvider>
    )
})

export default AppHeader;   