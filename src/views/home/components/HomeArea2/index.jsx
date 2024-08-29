import React,{memo} from 'react';
import {HomeArea2Wrapper} from './css'
import PropTypes from 'prop-types'
import HeaderTitle from '@/components/HeaderTitle'
import CityRoom from './components/CityRoom'
import ScrollView from '@/components/ScrollView'

const HomeArea2 = memo((props) => {
      const {dataInfo}=props
        console.log(dataInfo)
      return(
        <HomeArea2Wrapper>
         <HeaderTitle title={dataInfo.title} subtitle={dataInfo.subtitle}></HeaderTitle>
          <div className="city-content">
            <ScrollView>
              {
                dataInfo.list.map((item,index)=>{
                  return <CityRoom key={index} roomInfo={item}></CityRoom>
                })
              }
            </ScrollView>
          </div>
        </HomeArea2Wrapper>
      )
});

export default HomeArea2;   

HomeArea2.propTypes={
    dataInfo:PropTypes.object
}