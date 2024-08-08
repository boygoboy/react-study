import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IndicatorViewWrapper } from './css';

const IndicatorView = memo((props) => {
    const {selectIndex=0}=props
    const indicatorRef=useRef()
    useEffect(()=>{
     const indicatorScrollWidth=indicatorRef.current.scrollWidth;
     const newElement=indicatorRef.current.children[selectIndex]
     const newOffsetLeft=newElement.offsetLeft;
     const newElementWidth=newElement.clientWidth;
     const clientWidth=indicatorRef.current.clientWidth;
     const totalDistance=indicatorScrollWidth-clientWidth;
     const removeDistance=newOffsetLeft+newElementWidth*0.5-clientWidth*0.5;
     if(removeDistance<0){
        removeDistance=0
     }
     if(removeDistance>totalDistance){
        removeDistance=totalDistance
     }
        indicatorRef.current.style.transform=`translate(-${removeDistance}px)`
    },[selectIndex])
    return (
        <IndicatorViewWrapper>
            <div className="indicator-content" ref={indicatorRef} >
                {
                    props.children
                }
            </div>
        </IndicatorViewWrapper>
    )
})

IndicatorView.propTypes = {
    selectIndex: PropTypes.number
}

