import React, { memo,useState,useEffect,useRef} from 'react';
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import {ScrollViewWrapper} from './css'

const ScrollView = memo((props) => {
   const [showLeft,setShowLeft]=useState(false)
   const [showRight,setShowRight]=useState(false)
   const [posIndex,setPosIndex]=useState(0)
   const scrollContentRef=useRef()
   const totalDistanceRef=useRef()
    
   useEffect(()=>{
   const scrollWidth=scrollContentRef.current.scrollWidth;
   const clientWidth=scrollContentRef.current.clientWidth; 
   const totalDistance=scrollWidth-clientWidth;
    totalDistanceRef.current=totalDistance;
    setShowRight(totalDistance>0)
   },[props.children])

    function toNextScroll(isRight){
        const newIndex=isRight?posIndex+1:posIndex-1;
        setPosIndex(newIndex)
        const newElement=scrollContentRef.current.children[newIndex]
        const newOffsetLeft=newElement.offsetLeft;
        scrollContentRef.current.style.transform=`translate(-${newOffsetLeft}px)`
        setShowLeft(newOffsetLeft>0)
        setShowRight(newOffsetLeft<totalDistanceRef.current)
    }
    

   return (
        <ScrollViewWrapper>
            {showLeft&&
            (
                <div className="btn left-btn" onClick={e=>toNextScroll(false)} >
                    <IconArrowLeft />
                </div>
            )
            }
            {
                showRight&&
                (
                    <div className="btn right-btn" onClick={e=>toNextScroll(true)} >
                        <IconArrowRight />
                    </div>
                )
            }
             <div className="scroll-view">
                <div className="scroll-view-content" ref={scrollContentRef}>
                 {props.children}
                </div>
             </div>
        </ScrollViewWrapper>
   )
})

export default ScrollView;