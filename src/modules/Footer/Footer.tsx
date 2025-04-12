import React from 'react'
import {FooterBg,FooterContainer,LogoContainer,Logo,BoxBtn,CusTypography,BoxText,BoxContent,CusAccent,CusText,CusSpan,BoxTitle,CusTextTitle,BoxInput} from "./Footer.style";
import { ReactComponent as Logo1 } from "./../../assets/google-play.svg";
import { ReactComponent as Logo2 } from "./../../assets/app-store.svg";
import {Link} from "@mui/material";
import VectorImage from "./../../assets/logo.svg";
import Form from '../../componets/Form/Form';
import CusButton from '../../componets/Button/CusButton';

export default function Footer() {
  return (
    <FooterBg>
    <FooterContainer maxWidth={false} sx={{ padding: 2}}>
      
        
               {/* Logo */}
        <LogoContainer>
          <Logo src={VectorImage} alt="Logo" />
          <BoxTitle>
          <CusTypography variant="h6">
            ROAD <CusSpan>TRIP</CusSpan> RENT
          </CusTypography>
          <CusTextTitle>
          Drive Your Dreams: Your Journey Starts Here!
          </CusTextTitle>
          </BoxTitle>
           
        </LogoContainer>
              <BoxInput>
                 <Form> Submit  </Form>
                
              </BoxInput>
       
           <BoxContent>
          
              </BoxContent>
    </FooterContainer>
    </FooterBg>
  )
}
