import React, { memo ,useState,useRef} from 'react';
import { CardItemWrapper } from './css';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IndicatorView from '@/components/IndicatorView'
import classNames from 'classnames';

const CardItem = memo((props) => {
    const {cardWidth,roomInfo,itemClick} = props
    const pictureElement=(
        <div className="cover">
            <img src={roomInfo.picture_url} alt="" />
        </div>
    )

    const [activeIndex,setActiveIndex]=useState(0)
    const carouselRef=useRef()

    function controlClickHandle(isNext=true,event){
       isNext?carouselRef.current.next():carouselRef.current.prev()
       let newIndex=isNext?activeIndex+1:activeIndex-1
       const {length}=roomInfo.picture_urls
       if(newIndex<0){
         newIndex=length-1
       }
       if(newIndex>length-1){
        newIndex=0
       }
       setActiveIndex(newIndex)
       event.stopPropagation()
    }
     
    function itemClickHandler(){
        itemClick(roomInfo)
    }

    const sliderElement=(
        <div className="slider">
        <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
    
         <div className="indicator">
            <IndicatorView selectIndex={activeIndex}>
             {
                roomInfo.picture_urls?.map((item,index)=>{
                    return (
                        <div className="item" key={item}>
                        <span className={classNames('dot',{active:activeIndex==index})}></span>
                        </div>
                )
                })
             }
            </IndicatorView>
         </div>

            <Carousel dots={false} ref={carouselRef}>
              {
                roomInfo.picture_urls?.map(item=>(
                 <div className="cover" key={item}>
                    <img src={item} alt="" />
                </div>
                ))
              }
            </Carousel>
        </div>
    )
    

    return (
        <CardItemWrapper $cardWidth={cardWidth} onClick={itemClickHandler}>
         <div className="inner">
         {roomInfo.picture_urls?sliderElement:pictureElement}
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