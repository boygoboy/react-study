import React,{memo,useState} from 'react';
import PropTypes from 'prop-types'
import {SearchTabWrapper} from './css'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames';

const SearchTab=memo((props)=>{
     const [selectItems,setSelectItems]=useState([])
    
     function handleSelectItem(item){
        const newSelectItems=[...selectItems]
        if(newSelectItems.includes(item)){
          const index=newSelectItems.findIndex(ele=>item==ele)
          newSelectItems.splice(index,1)
          setSelectItems(newSelectItems)
        }else{
            newSelectItems.push(item)
            setSelectItems(newSelectItems)
        }
     }

    return(
        <SearchTabWrapper>
            <div className="filter">
            {
            filterData.map(item=>{
              return (
                <div className={classNames('item',{'active-tab':selectItems.includes(item)})}
                key={item} onClick={e=>handleSelectItem(item)}
                >
                {item}
                </div>
              )
            })
           }
            </div>
        </SearchTabWrapper>
    )
})

SearchTab.propTypes={

}

export default SearchTab