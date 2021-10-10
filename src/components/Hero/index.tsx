import React from "react";
import { FiSearch } from 'react-icons/fi';
import {HeroContainer, HeroContent, HeroBg,Input,Button} from './HeroElements'

function Hero(){
    return(
        <HeroContainer>
            <HeroBg>
                <HeroContent>
                    <Input 
                        placeholder="search city..."
                    />
                    <Button>
                        <FiSearch />
                    </Button>
                </HeroContent>
            </HeroBg>
        </HeroContainer>
    )
}

export default Hero