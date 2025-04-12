// them <BoxProps>vo import de moi them duoc component ben tsx
import { Box, Typography, Button, BoxProps,Paper,Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Wrapper from "../../../componets/Wrapper/Wrapper";

// them <BoxProps> de moi them duoc component ben tsx
export const StyledContainer = styled(Wrapper)<BoxProps>(({ theme }) => ({
  padding: "1.25rem 1.25rem",

}));
export const  CusPaper = styled(Paper)<BoxProps>(({ theme }) => ({
  width:"100%",
  height:"auto",
  paddingRight:"1.25rem",
  backgroundColor:theme.palette.background.grey,
  display:"flex",
  flexDirection:"row",
  justifyContent: "center",
  alignItems:"center",
 
  [theme.breakpoints.down("lg")]: {
    display:"flex",
    flexDirection:"column",
    // width:"auto",
    // margin:"0 auto"
  },
}));
export const  CusBox = styled(Box)<BoxProps>(({ theme }) => ({
 
}));
export const  CusGirdTotal = styled(Grid)<BoxProps>(({ theme }) => ({
  
  display:"flex",
  flexWrap: "wrap",
  flexDirection:"row",

}));

export const  CusGrid = styled(Grid)<BoxProps>(({ theme }) => ({
  // width:"40%",
  [theme.breakpoints.down("lg")]: {
    width:"auto",
    display:"flex",
    justifyContent: "center",
  },
  // // marginRight:"0.2rem"
}));

export const  CusIcon = styled("img")<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width:"4vw",
    height:"4vh",
  },
  [theme.breakpoints.down("md")]: {
    width:"4vw",
    height:"4vh",
  },
}));
export const  CusTypography = styled(Typography)<BoxProps>(({ theme }) => ({
  ...theme.typography.Button2, // Áp dụng toàn bộ thuộc tính từ theme
  // marginRight:"0.2rem"
}));
