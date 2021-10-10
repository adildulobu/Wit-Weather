import React from "react";

import {FiCloud} from 'react-icons/fi'

import {WeatherContainer,WeatherItems,WeatherItemUp,WeatherIcon,WeatherItemDown,WeatherItemDownMax,WeatherItemDownMin} from './WeatherElements'

function Weather(){
    return(
        <WeatherContainer>
            <WeatherItems>
                <WeatherItemUp>
                    Monday
                </WeatherItemUp>
                <WeatherIcon>
                    <FiCloud />
                </WeatherIcon>
                <WeatherItemDown>
                    <WeatherItemDownMax>30°C </WeatherItemDownMax> 
                    <WeatherItemDownMin>/ 15°C</WeatherItemDownMin>
                </WeatherItemDown>
            </WeatherItems>
            <WeatherItems>
                <WeatherItemUp>
                    Monday
                </WeatherItemUp>
                <WeatherIcon>
                    <FiCloud />
                </WeatherIcon>
                <WeatherItemDown>
                    <WeatherItemDownMax>30°C </WeatherItemDownMax> 
                    <WeatherItemDownMin>/ 15°C</WeatherItemDownMin>
                </WeatherItemDown>
            </WeatherItems>
            <WeatherItems>
                <WeatherItemUp>
                    Monday
                </WeatherItemUp>
                <WeatherIcon>
                    <FiCloud />
                </WeatherIcon>
                <WeatherItemDown>
                    <WeatherItemDownMax>30°C </WeatherItemDownMax> 
                    <WeatherItemDownMin>/ 15°C</WeatherItemDownMin>
                </WeatherItemDown>
            </WeatherItems>
            <WeatherItems>
                <WeatherItemUp>
                    Monday
                </WeatherItemUp>
                <WeatherIcon>
                    <FiCloud />
                </WeatherIcon>
                <WeatherItemDown>
                    <WeatherItemDownMax>30°C </WeatherItemDownMax> 
                    <WeatherItemDownMin>/ 15°C</WeatherItemDownMin>
                </WeatherItemDown>
            </WeatherItems>
        </WeatherContainer>
    )
}

export default Weather