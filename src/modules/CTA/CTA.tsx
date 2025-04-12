import React from 'react'
import {CTABg,CTAContainer,CusImg,BoxBtn,CusTypography,BoxText,BoxContent,CusAccent,CusText} from "./CTA.style";
import { ReactComponent as Logo1 } from "./../../assets/google-play.svg";
import { ReactComponent as Logo2 } from "./../../assets/app-store.svg";
import {Link} from "@mui/material";

export default function CTA() {
  return (
    <CTABg>
    <CTAContainer maxWidth={false} sx={{ padding: 2}}>
        <CusImg src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/a2744ed6ff82ec8ddd7e8ff2196835641e145535/src/CTA/Frame%20713.svg" alt="smart-phone"/>
     
           <BoxContent>
                <BoxText>
                <CusTypography>Download RoadTripRent
                <br/>
               for  <CusAccent>FREE</CusAccent>
                <br/>
       
                </CusTypography>
                <CusText>
                For faster, easier booking and exclusive deals
                </CusText>
                </BoxText>
                <BoxBtn>
                  <Link href="href"><Logo1/></Link>
                  <Link href="href"> <Logo2/></Link>
                 
                </BoxBtn>
              </BoxContent>
    </CTAContainer>
    </CTABg>
  )
}
