import React,{memo} from 'react';
import { HeaderCenterWrapper } from './css';
import SearchArea from './components/SearchArea';
import SearchTitles from '@/assets/data/search_titles.json'

 const HeaderCenter = memo((props) => {
    const {clickSearch,isSearch}=props
   function handleSearch(isSearch){
         if(clickSearch){
             clickSearch(isSearch)
         }
   }
   return (
       <HeaderCenterWrapper>
           <div className='header-center'>
                <SearchArea isSearch={isSearch} SearchTitles={SearchTitles} openSearch={(isSearch)=>handleSearch(isSearch)} />
           </div>
       </HeaderCenterWrapper>
   )
})

export default HeaderCenter;