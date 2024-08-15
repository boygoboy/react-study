import React,{memo} from 'react'
import {HomeArea1Wrapper} from './css'
import HeaderTitle from '@/components/HeaderTitle'
import HomeTabs from '../HomeTabs'
import CardBox from '@/components/CardBox'


const HomeArea1 = memo((props) => {

    const {dataInfo}=props
    const {title,subtitle,dest_address,dest_list
    }=dataInfo
    console.log(dest_list)
    const tabNames=dest_address?.map(item=>item.name)
    return (
        <HomeArea1Wrapper>
            <HeaderTitle  title={title} subtitle={subtitle}></HeaderTitle>
            <HomeTabs tabNames={tabNames} ></HomeTabs>
            <CardBox cardWidth="33.333%"></CardBox>
        </HomeArea1Wrapper>
    )
})

export default HomeArea1;