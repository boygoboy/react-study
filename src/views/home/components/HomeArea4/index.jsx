import React,{memo} from 'react';
import {HomeArea4Wrapper} from './css'
import PropTypes from 'prop-types'
import HeaderTitle from '@/components/HeaderTitle'
import CardBox from '@/components/CardBox'
import HomeFooter from '../HomeFooter'
import ScrollView from '@/components/ScrollView';
import CardItem from '@/components/CardItem'

const HomeArea4 = memo((props) => {
    const {dataInfo}=props
    console.log(dataInfo)
    return(
        <HomeArea4Wrapper>
         <HeaderTitle title={dataInfo.title} subtitle={dataInfo.subtitle}></HeaderTitle>
           <div className="room-box">
            <ScrollView>
              {
                dataInfo.list.map((item,index)=>{
                  return <CardItem key={index} roomInfo={item} cardWidth="20%"></CardItem>
                })
              }
            </ScrollView>
           </div>
            <HomeFooter name={dataInfo.type}></HomeFooter>
        </HomeArea4Wrapper>
    )
});

export default HomeArea4;

HomeArea4.propTypes={
    dataInfo:PropTypes.object
}