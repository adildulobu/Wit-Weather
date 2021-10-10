import styled from "styled-components";
import HeroImage from '../../images/HeroBg-3.jpg'

export const HeroContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const HeroContent = styled.div`
    
`
export const Input = styled.input`
    border:none;
    padding:10px;
    outline:none;
    color:#1F1F1F;
    border-top-left-radius:2px;
    border-bottom-left-radius:2px;

    @media screen and (max-width:2500px){
        width:600px;
    }

    @media screen and (max-width:768px){
        width:420px;
    }
    @media screen and (max-width:480px){
        width:350px;
    }
    @media screen and (max-width:392px){
        width:260px;
    }
`

export const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    font-weight:500;
    width:36px;
    border:none;
    background:#FC9700;
    color:#FFF;
    cursor:pointer;
    border-top-right-radius:2px;
    border-bottom-right-radius:2px;
`

export const HeroBg = styled.div`
    width:100%;
    height: 387px;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${HeroImage});
    display:flex;
    align-items:center;
    justify-content:center;
`
export const FormElement = styled.form`
    display:flex;
    flex-direction:column
`
export const InputSection = styled.div`
    display:flex;
`

export const  ErrorSection = styled.div`
    color: #FFF;
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0 0;
`