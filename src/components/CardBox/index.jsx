import React,{memo} from 'react';
import {CardBoxWrapper} from './css';
import PropTypes from 'prop-types';
import CardItem from '@/components/CardItem'

const CardBox=memo((props)=>{
    const {cardWidth}=props
    return (
        <CardBoxWrapper>
         <CardItem $cardWidth={cardWidth}></CardItem>
        </CardBoxWrapper>
    )
})

CardBox.propTypes = {
    cardWidth: PropTypes.string
}


export default CardBox;