import React from "react";

import { FaSun } from 'react-icons/fa';
import {HeaderContainer,HeaderLogo, HeaderButton,HeaderIcon,HeaderTitle} from './HeaderElements'


function Header(){
    return(
        < HeaderContainer>
            <HeaderLogo>
                <HeaderIcon>
                <FaSun />
                </HeaderIcon>
                <HeaderTitle>
                Wit-Weather
                </HeaderTitle>
            </HeaderLogo>
            <HeaderButton>
                Button
            </HeaderButton>
        </HeaderContainer>
    )
}

export default Header