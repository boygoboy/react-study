import React, { memo,useState } from 'react';
import { CSSTransition } from "react-transition-group"
import { SearchAreaWrapper } from './css';
import IconSearchBar from '@/assets/svg/icon-search-bar'
import classNames from 'classnames'


const SearchArea = memo((props) => {
    const [searchIndex,setSearchIndex]=useState(0)
    const {isSearch,openSearch}=props
    const {SearchTitles}=props
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
            {
                !isSearch&&(
                    <div className='search-area' onClick={e=>clickSearch()} >
                    <span className='placeholder-text'>
                     搜索房源和体验
                    </span>
                    <span className='search-icon'>
                          <IconSearchBar />
                    </span>
                 </div>
                )
            }
            {
                isSearch&&(
                    <div className="search-detail">
                    <div className="tabs">
                        {
                            SearchTitles.map((item,index)=>{
                                return <div key={index} className={classNames('tab',{active:index==searchIndex})} onClick={e=>changeSearchIndex(index)} >{item.title}</div>
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
                )
            }
        </SearchAreaWrapper>
    )
})

export default SearchArea;