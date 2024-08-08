import React,{memo} from 'react';
import {HeaderTitleWrapper} from './css'
const HeaderTitle=memo((props)=>{
     const {title,subtitle}=props
    return (
        <HeaderTitleWrapper>
            <h2 className="title">{title}</h2>
            <div className='subtitle'>{subtitle}</div>
        </HeaderTitleWrapper>
    )
})

export default HeaderTitle;