import {HeroContainer,BoxContent,BoxText,CusTypography,BoxBtn} from "./Hero.style";
import {Link} from "@mui/material";
import Header from "./Header/Header";
import { ReactComponent as Logo1 } from "./../../assets/google-play.svg";
import { ReactComponent as Logo2 } from "./../../assets/app-store.svg";

export default function Hero() {
  return (
    <HeroContainer maxWidth={false} sx={{ padding: 2}}>
      
      <Header/>
      <BoxContent>
        <BoxText>
        <CusTypography>Drive the Experience:
        <br/>
       Your Journey, Your Car, 
        <br/>
        Your Way!
        </CusTypography>
        </BoxText>
        <BoxBtn>
          <Link href="href"><Logo1/></Link>
          <Link href="href"> <Logo2/></Link>
         
        </BoxBtn>
      </BoxContent>
     
    </HeroContainer>
  )
}
