import React,{memo} from 'react'
import {EntireRoomWrapper} from './css'
import { shallowEqual,useDispatch,useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import CardItem from '@/components/CardItem'

const EntireRoom=memo((props)=>{
    const {roomList,isLoading,totalCount}=useSelector((state)=>({
        roomList:state.entire.roomList,
        isLoading:state.entire.isLoading,
        totalCount:state.entire.totalCount,
    }),shallowEqual)
    console.log(roomList)
    return (
        <EntireRoomWrapper>
            <h2 className='title'>{totalCount}多处住所</h2>
            <div className="room-list">
                {
                    roomList.map((item)=>{
                        return (
                         <CardItem key={item._id} cardWidth="20%" roomInfo={item}>
                         </CardItem>
                        )
                    })
                }
            </div>
        </EntireRoomWrapper>
    )
})

EntireRoom.propTypes={

}

export default EntireRoom   