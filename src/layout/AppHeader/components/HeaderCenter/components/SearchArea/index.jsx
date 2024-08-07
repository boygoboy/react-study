import React, { memo,useState,useRef } from 'react';
import { CSSTransition } from "react-transition-group"
import { SearchAreaWrapper } from './css';
import IconSearchBar from '@/assets/svg/icon-search-bar'
import classNames from 'classnames'


const SearchArea = memo((props) => {
    const [searchIndex,setSearchIndex]=useState(0)
    const {isSearch,openSearch}=props
    const {SearchTitles}=props
    const barRef=useRef(null)
    const detailRef=useRef(null)
    function changeSearchIndex(index){
        setSearchIndex(index)
    }

    function clickSearch(){
      if(openSearch){
        openSearch(true)
      }
    }
    return (
        <SearchAreaWrapper>
                  <CSSTransition
                  nodeRef={barRef}
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
            <div className='search-area' onClick={e=>clickSearch()} ref={barRef} >
                 <span className='placeholder-text'>
                     搜索房源和体验
                    </span>
                    <span className='search-icon'>
                          <IconSearchBar />
                    </span>
                 </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        nodeRef={detailRef}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
                    <div className="search-detail" ref={detailRef} >
                    <div className="tabs">
                        {
                            SearchTitles.map((item,index)=>{
                                return <div key={index} className={classNames('tab',{active:index===searchIndex})} onClick={e=>changeSearchIndex(index)} >{item.title}</div>
                            })
                        }
                    </div>
                    <div className="search-content">
                        <div className="content">
                       {
                         SearchTitles[searchIndex].searchInfos.map((item,index)=>{
                            return (
                                <div key={index} className={classNames('search-info')}>
                                    <div className="search-title">{item.title}</div>
                                   <div className="search-desc">{item.desc}</div>
                                </div>      
                            )
                         })
                       }
                        </div>
                    </div>
                </div>
      </CSSTransition>
        </SearchAreaWrapper>
    )
})

export default SearchArea;