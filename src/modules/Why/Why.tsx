import React from 'react'
import {WhyContainer,CusImg} from "./Why.style";
import WhyInfo from './WhyInfo/WhyInfo';

export default function Why() {
  return (
    <WhyContainer maxWidth={false} sx={{ padding: 2}}>
        <CusImg src="https://github.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/blob/main/src/Why/image%2013.png?raw=true" alt=""/>
        <WhyInfo/>
    </WhyContainer>
  )
}
