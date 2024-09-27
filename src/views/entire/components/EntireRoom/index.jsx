import React,{memo, useCallback} from 'react'
import {EntireRoomWrapper} from './css'
import { shallowEqual,useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import CardItem from '@/components/CardItem'
import {changeDetailInfoAction} from '@/store'

const EntireRoom=memo((props)=>{
    const {roomList,isLoading,totalCount}=useSelector((state)=>({
        roomList:state.entire.roomList,
        isLoading:state.entire.isLoading,
        totalCount:state.entire.totalCount,
    }),shallowEqual)
    console.log(roomList)
    console.log(isLoading)
    const dispatch=useDispatch()
    const navigate=useNavigate()
     
    const  toDetailPage =useCallback((roomInfo)=>{
        dispatch(changeDetailInfoAction(roomInfo))
        navigate("/detail")
    },[navigate,dispatch])

    return (
        <EntireRoomWrapper>
            <h2 className='title'>{totalCount}多处住所</h2>
            <div className="room-list">
                {
                    roomList.map((item)=>{
                        return (
                         <CardItem key={item._id} cardWidth="20%" roomInfo={item} itemClick={toDetailPage}>
                         </CardItem>
                        )
                    })
                }
            </div>
            {isLoading && <div className="cover"></div>}
        </EntireRoomWrapper>
    )
})

EntireRoom.propTypes={

}

export default EntireRoom   