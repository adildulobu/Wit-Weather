import React,{useState} from "react";

import { FaSun } from 'react-icons/fa';
import {HeaderContainer,HeaderLogo, HeaderButton,HeaderIcon,HeaderTitle,HeaderButtonLabel} from './HeaderElements'

import Switch from "react-switch";



function Header(){
    
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: any) => {
    setChecked(nextChecked);
    console.log(nextChecked)
  };
    
   

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
                <Switch checkedIcon={false} 
                    uncheckedIcon={false}
                    onColor="#FC9700"
                    onChange={handleChange} checked={checked}
                />
                <HeaderButtonLabel>°F</HeaderButtonLabel>
            </HeaderButton>
        </HeaderContainer>
    )
}

export default Header