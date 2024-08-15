import React, { memo } from 'react';
import { CardItemWrapper } from './css';
import PropTypes from 'prop-types';

const CardItem = memo((props) => {
    const { cardWidth } = props
    return (
        <CardItemWrapper cardWidth={cardWidth}>
         
        </CardItemWrapper>
    )
})

CardItem.propTypes = {
    cardWidth: PropTypes.string
}

export default CardItem;