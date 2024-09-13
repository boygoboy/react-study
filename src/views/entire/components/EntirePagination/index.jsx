import React,{memo} from 'react'
import {EntirePaginationWrapper} from './css'
import PropTypes from 'prop-types'
import { shallowEqual,useDispatch,useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import {fetchRoomListAction} from '@/store'


const EntirePagination =memo((props)=>{
    const {totalCount,roomList,currentPage}=useSelector((state)=>({
        totalCount:state.entire.totalCount,
        roomList:state.entire.roomList,
        currentPage:state.entire.currentPage
    }),shallowEqual)
    
      // 小算法:必须掌握
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20


    const dispatch = useDispatch()
    
    function pageChangeHandle(event,pageCount){
        dispatch(fetchRoomListAction(pageCount-1))
    }

     return(
        <EntirePaginationWrapper>
         {
            !!roomList.length&&(
                <div className="info">
                       <Pagination count={totalPage} onChange={pageChangeHandle}/>
                       <div className="desc">
                       第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
                       </div>
                </div>
            )
         }
        </EntirePaginationWrapper>
     )
    
})

EntirePagination.propTypes={

}

export default EntirePagination
