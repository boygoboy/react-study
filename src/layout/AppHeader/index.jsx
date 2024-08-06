import React,{memo,useState,useRef,useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import { HeaderWrapper,SubHeaderWrapper } from './css';
import HeaderCenter from './components/HeaderCenter';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
import {useScrollPosition} from '@/hooks';
  const AppHeader = memo(() => {
    const [isSearch, setIsSearch] = useState(false)
    const {scrollY}=useScrollPosition();
    const lastScrollY=useRef(0);
    useEffect(() => {
        if (!isSearch) {
          lastScrollY.current = scrollY;
        }
        if (isSearch && Math.abs(scrollY - lastScrollY.current) > 30) {
          setIsSearch(false);
        }
      }, [scrollY, isSearch]);

    const isAlpha=scrollY===0;
    return (
        <ThemeProvider theme={{isAlpha}}>
        <HeaderWrapper>
            <div className='header'>
                <div className="top">
                <HeaderLeft/>
                < HeaderCenter isSearch={isSearch} clickSearch={(isSarch)=>setIsSearch(isSarch)} />
                <HeaderRight/>
                </div>
                <div className="bottom">
                <SubHeaderWrapper isSearch={isSearch}>
                </SubHeaderWrapper>
                </div>
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