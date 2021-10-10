import styled from "styled-components";

export const WeatherContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
export const WeatherItems = styled.div`
    background:#EBE9EA;
    width:300px;
    height:300px;
    border-radius:2px;
    margin: 40px 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
export const WeatherItemUp = styled.div`
    color:#FC9700;
    font-size:22px;
    font-weight:700;
`
export const WeatherItemDown = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
`
export const WeatherIcon = styled.i`
    font-size:60px;
`
export const WeatherItemDownMax = styled.span`
    margin-right:8px;
    font-size:40px;
`

export const WeatherItemDownMin = styled.span`
    color:rgba(0, 0, 0, 0.76);
    font-size:20px;
`

