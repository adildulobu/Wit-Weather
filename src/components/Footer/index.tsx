import React from "react";

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { FooterContainer,FooterText } from './FooterElements'

function Footer(){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAdQVQrsk58qr44nH5bpVcx4DsPPVD-R_Y"
      })

    return(
        <FooterContainer>

            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{width:'100%', height:'100%'}}
                        center={{
                            lat:-25.9740134,
                            lng:32.5624548,
                        }}
                        zoom={15}
                    >
                      { /* Child components, such as markers, info windows, etc. */ }
                      <></>
                    </GoogleMap>
                ) : <></>
            }

            <FooterText>
                Made By Adil Dulobu
            </FooterText>
        </FooterContainer>
    )
}

export default Footer