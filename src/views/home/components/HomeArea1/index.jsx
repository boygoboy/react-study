import React,{memo,useCallback,useState} from 'react'
import {HomeArea1Wrapper} from './css'
import HeaderTitle from '@/components/HeaderTitle'
import HomeTabs from '../HomeTabs'
import CardBox from '@/components/CardBox'
import HomeFooter from '../HomeFooter'


const HomeArea1 = memo((props) => {

    const {dataInfo}=props
    const {title,subtitle,dest_address,dest_list
    }=dataInfo
    console.log(dest_list)
    const initalName=Object.keys(dataInfo.dest_list)[0]
    const [tabName,setTabName]=useState(initalName)
    const tabNames=dest_address?.map(item=>item.name)
  
    const switchTab=useCallback((tabName)=>{
        console.log(tabName)
        setTabName(tabName)
    },[])

    return (
        <HomeArea1Wrapper>
            <HeaderTitle  title={title} subtitle={subtitle}></HeaderTitle>
            <HomeTabs tabNames={tabNames} tabClick={switchTab} ></HomeTabs>
            <CardBox cardWidth="33.333%" roomList={dest_list[tabName]}></CardBox>
            <HomeFooter name={tabName}></HomeFooter>
        </HomeArea1Wrapper>
    )
})

export default HomeArea1;