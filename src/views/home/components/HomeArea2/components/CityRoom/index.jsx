import React,{memo} from 'react';
import {CityRoomWrapper} from './css'
import PropTypes from 'prop-types'

const CityRoom = memo((props) => {
    const {roomInfo}=props

    return(
     <CityRoomWrapper>
        <div className="inner-box">
          <div className="room">
            <img className="img-fill"  src={roomInfo.picture_url} alt="" />
            <div className="cover"></div>
            <div className="bottom-info">
                <div className="city-name">{roomInfo.city}</div>
                <div className="price-info">{roomInfo.price}</div>
            </div>
          </div>
        </div>
     </CityRoomWrapper>
    )
})

export default CityRoom;

CityRoom.propTypes={
    roomInfo:PropTypes.object
}
