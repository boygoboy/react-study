import React,{memo} from 'react';
import {CardBoxWrapper} from './css';
import PropTypes from 'prop-types';
import CardItem from '@/components/CardItem'

const CardBox=memo((props)=>{
    const {cardWidth,roomList=[]}=props
    console.log(roomList)
    return (
        <CardBoxWrapper>
            {
          roomList?.slice(0,8)?.map((item,index)=>{
           return <CardItem $cardWidth={cardWidth} roomInfo={item} key={index}></CardItem>
          })
            }
        </CardBoxWrapper>
    )
})

CardBox.propTypes = {
    cardWidth: PropTypes.string
}


export default CardBox;