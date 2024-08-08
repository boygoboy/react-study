import React,{memo,useState} from 'react';
import {HomeTabsWrapper} from './css'
import ScrollView from '@/components/ScrollView';
import PropTypes from 'prop-types'
import classNames from 'classnames';

const HomeTabs = memo((props) => {
    const {tabNames}=props
    const [activeIndex,setActiveIndex]=useState(0)

    function switchTab(index){
        setActiveIndex(index)
    }

    return (
        <HomeTabsWrapper>
            <ScrollView>
              {
                tabNames?.map((item,index)=>{
                    return (
                        <div
                         onClick={e=>switchTab(index)}
                        key={index} className={classNames('tab-item',{'active-item':activeIndex===index})}>
                            <span>{item}</span>
                        </div>
                    )
                })
              }
            </ScrollView>
        </HomeTabsWrapper>
    )
})

HomeTabs.propTypes = {
    tabNames: PropTypes.array
  }

export default HomeTabs;    