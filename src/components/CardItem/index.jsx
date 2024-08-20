import React, { memo } from 'react';
import { CardItemWrapper } from './css';
import PropTypes from 'prop-types';

const CardItem = memo((props) => {
    const {cardWidth,roomInfo} = props
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
        </CardItemWrapper>
    )
})

CardItem.propTypes = {
    cardWidth: PropTypes.string
}

export default CardItem;