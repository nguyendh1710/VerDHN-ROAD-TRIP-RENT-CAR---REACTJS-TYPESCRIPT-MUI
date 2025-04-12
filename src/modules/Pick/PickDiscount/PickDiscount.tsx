import React from 'react'
import {PickDiscountContainer,CusImg,CusSubTitle1,CusSubTitle2,CusBoxTitle,BoxBtn} from "./PickDiscount.style";
import { Divider, Stack, Typography} from "@mui/material";
import CusButton from '../../../componets/Button/CusButton';

export default function PickDiscount() {
  return (
    <PickDiscountContainer maxWidth={false} sx={{ padding: 2}}>

<Stack direction="row" spacing={2} alignItems="center">
<CusImg src='https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/a8b54078c2f11816bb72174a882904f01407a139/src/Pick/PickDiscount/Frame%20677.svg'/>
      <Divider orientation="vertical" flexItem sx={{ borderWidth: "1px",color:"black" }} />
      <CusBoxTitle>$<CusSubTitle1>300</CusSubTitle1><CusSubTitle2>/24h</CusSubTitle2></CusBoxTitle>
    </Stack>

      <BoxBtn>
        <CusButton variant='outlined' size='medium'>Check details</CusButton>
        <CusButton  variant='contained' size='medium'>Rent now</CusButton> 
      </BoxBtn>
   
        
    </PickDiscountContainer>
  )
}
