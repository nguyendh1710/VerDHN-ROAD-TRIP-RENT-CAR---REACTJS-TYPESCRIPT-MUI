// Import các icon từ @mui/icons-material và đổi tên cho dễ đọc de len dau vay moi chay
import { Menu, Close } from "@mui/icons-material";
// them <BoxProps>vo import de moi them duoc component ben tsx
import {Box, Typography, Button, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import Wrapper from "../../../componets/Wrapper/Wrapper";


// them <BoxProps> de moi them duoc component ben tsx
export const StyledContainer = styled(Wrapper)<BoxProps>(({ theme }) => ({

}));
export const NavBar = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
});
export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "3.5rem",

});
export const Logo = styled("img")(({ theme }) =>({
  height: "23px",
  width: "22.1px",
  marginRight: "8px",
  [theme.breakpoints.down("lg")]: {
   
    height: "4vw",
    width: "4vw",
  },
  [theme.breakpoints.down("md")]: {
   
    height: "7vw",
    width: "7vw",
  },
  [theme.breakpoints.down("sm")]: {
    height: "7vw",
    width: "7vw",
  },
}));
// Mở rộng kiểu LinkProps để thêm thuộc tính `open`
type NavLinksProps = {
  open?: boolean;
}
// Menu chính
export const NavLinks = styled(Box)<NavLinksProps>(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
  ...theme.typography.Heading1, // Áp dụng toàn bộ thuộc tính từ theme

  [theme.breakpoints.down("lg")]: {
    display: open ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "18vh",
    left: "0",
    width: "100%",
    background: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1rem 2rem",
  },
}));
export const NavItem = styled(Typography)(({ theme }) => ({
  ...theme.typography.Button1, // Áp dụng toàn bộ thuộc tính từ theme
  color: "rgba(43, 43, 43, 1)",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export const CusTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Days One",
  fontSize: "1.5rem",
  fontWeight: 400,
  color: "rgba(0, 129, 111, 1)",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",

  },
  [theme.breakpoints.down("sm")]: {
   
    fontSize: "0.7rem",
  },
}));
export const CusSpan = styled("span")(({ theme }) => ({
  fontFamily: "Days One",
  fontSize: "21px",
  fontWeight: 400,
  color: theme.palette.secondary.main,
}));
export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection:"row",
  gap: "20px",
  marginLeft: "1.5rem",
  [theme.breakpoints.down("lg")]: {
    display:"none"
    
  },
}));
// Nút menu hamburger
export const MenuButton = styled(Button)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lg")]: {

    display: "block",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "2.5rem",
    minWidth: "auto",
  },
}));
export const CusCloseIcon = styled(Close)<BoxProps>(({ theme }) => ({
  width: "3rem",
  height: "3rem",
  color: theme.palette.secondary.main,
}));

export const CusMenuIcon = styled(Menu)<BoxProps>(({ theme }) => ({
  width: "3rem",
  height: "3rem",
  color: theme.palette.secondary.main,
}));

