import React from 'react'
import {PickContainer,CusImg,CusTitle,CusSubTitle,BoxTitle} from "./Pick.style";
import PickInfo from './PickInfo/PickInfo';
import PickDiscount from './PickDiscount/PickDiscount';

export default function Pick() {
  return (
    <PickContainer maxWidth={false} sx={{ padding: 2}}>
        <CusTitle>Pick Your Car</CusTitle>
        <PickInfo/>
        <PickDiscount/>
    </PickContainer>
  )
}
