import {
  StyledContainer,
  CusTypography,
  CusSpan,
  NavBar,
  LogoContainer,
  Logo,
  NavLinks,
  NavItem,
  ButtonContainer,
  MenuButton,
  CusCloseIcon,
  CusMenuIcon,
} from "./Header.style";

import { useState } from "react";
import VectorImage from "./../../../assets/logo.svg";
import CusButton from "../../../componets/Button/CusButton";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledContainer component="header">
      <NavBar>
        {/* Logo */}
        <LogoContainer>
          <Logo src={VectorImage} alt="Logo" />
          <CusTypography variant="h6">
            ROAD <CusSpan>TRIP</CusSpan> RENT
          </CusTypography>
        </LogoContainer>
        {/* Nút mở menu */}
        <MenuButton onClick={() => setOpen(!open)}>
          {open ? <CusCloseIcon /> : <CusMenuIcon />}
        </MenuButton>
        {/* Menu chính */}
        <NavLinks open={open}>
          <NavItem onClick={() => setOpen(false)}>Home</NavItem>
          <NavItem onClick={() => setOpen(false)}>Why Choose Us</NavItem>
          <NavItem onClick={() => setOpen(false)}>Rent</NavItem>
          <NavItem onClick={() => setOpen(false)}>About Us</NavItem>
        </NavLinks>
        {/* Buttons */}
        <ButtonContainer>
          <CusButton variant="outlined" size="medium">
            Login
          </CusButton>
          <CusButton variant="contained" size="medium">
            Register
          </CusButton>
        </ButtonContainer>
      </NavBar>
    </StyledContainer>
  );
}
