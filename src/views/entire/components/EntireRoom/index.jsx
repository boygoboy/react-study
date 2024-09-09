import React,{memo} from 'react'
import {EntireRoomWrapper} from './css'
import PropTypes from 'prop-types'

const EntireRoom=memo((props)=>{

    return (
        <EntireRoomWrapper>
            <h1>EntireRoom</h1>
        </EntireRoomWrapper>
    )
})

EntireRoom.propTypes={

}

export default EntireRoom   