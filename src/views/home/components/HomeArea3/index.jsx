import React,{memo} from 'react';
import {HomeArea3Wrapper} from './css'
import PropTypes from 'prop-types'
import HeaderTitle from '@/components/HeaderTitle'
import CardBox from '@/components/CardBox'
import HomeFooter from '../HomeFooter'

const HomeArea3 = memo((props) => {
        const {dataInfo}=props
        return(
            <HomeArea3Wrapper>
             <HeaderTitle title={dataInfo.title} subtitle={dataInfo.subtitle}></HeaderTitle>
                <CardBox cardWidth="25%" roomList={dataInfo.list}></CardBox>
                <HomeFooter></HomeFooter>
            </HomeArea3Wrapper>
        )
})

export default HomeArea3;   

HomeArea3.propTypes={
    dataInfo:PropTypes.object
}