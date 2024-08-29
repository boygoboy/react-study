import React,{memo} from 'react';
import {HomeFooterWrapper} from './css'
import PropTypes from 'prop-types';
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import {useNavigate} from 'react-router-dom'

const HomeFooter = memo((props) => {
    const {name}=props
    let showMessage='显示全部'
    if(name){
        showMessage=`显示更多${name}房源`
    }

    const navigate=useNavigate()
    
    function toMorePage(){
        navigate('/entire')
    }

    return(
        <HomeFooterWrapper $color={name?'#00848A':'#000'}>
            <div className="footer-box" onClick={e=>toMorePage()}>
            <div className="footer-content">
                <span>{showMessage}</span>
            </div>
            <IconArrowRight />
            </div>
        </HomeFooterWrapper>
    )
})

export default HomeFooter; 

HomeFooter.propTypes = {
    name:PropTypes.string
}
