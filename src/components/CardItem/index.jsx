import React, { memo } from 'react';
import { CardItemWrapper } from './css';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material'


const CardItem = memo((props) => {
    const {cardWidth,roomInfo} = props
    console.log(roomInfo)
    const pictureElement=(
        <div className="cover">
            <img src={roomInfo.picture_url} alt="" />
        </div>
    )
    return (
        <CardItemWrapper $cardWidth={cardWidth}>
         <div className="inner">
         {roomInfo.picture_url&&pictureElement}
         </div>
         <div className="title-content">
            {
                roomInfo.verify_info.messages.join('·')
            }
         </div>
         <div className="desc-content">
            {roomInfo.name}
         </div>
         <div className="price-info">
            {roomInfo.price_format}/晚
         </div>
         <div className="review-info">
         <Rating 
            value={roomInfo.star_rating ?? 5}
            precision={0.1}
            readOnly 
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
            <span>{roomInfo.reviews_count}·</span>
            <span>{roomInfo.bottom_info?.content}</span>
         </div>
        </CardItemWrapper>
    )
})

CardItem.propTypes = {
    cardWidth: PropTypes.string
}

export default CardItem;