import React,{memo} from 'react'
import {HomeArea1Wrapper} from './css'
import HeaderTitle from '@/components/HeaderTitle'
import HomeTabs from '../HomeTabs'


const HomeArea1 = memo((props) => {

    const {dataInfo}=props
    const {title,subtitle,dest_address}=dataInfo
    const tabNames=dest_address?.map(item=>item.name)
    console.log(dataInfo)
    return (
        <HomeArea1Wrapper>
            <HeaderTitle  title={title} subtitle={subtitle}></HeaderTitle>
            <HomeTabs tabNames={tabNames} ></HomeTabs>
        </HomeArea1Wrapper>
    )
})

export default HomeArea1;