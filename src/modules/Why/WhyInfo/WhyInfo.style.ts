import { Box, Typography, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import Wrapper from "../../../componets/Wrapper/Wrapper";


// them <BoxProps> de moi them duoc component ben tsx
export const StyledContainer = styled(Wrapper)<BoxProps>(({ theme }) => ({
  paddingTop: "1.25rem",
  paddingBottom: "1.25rem",
  display:"flex",
  flexGrow:"1",
  width:"70%",
  backgroundColor:"green"
}));
export const BoxContent = styled(Box)<BoxProps>(({ theme }) => ({
  width:"100%",
  display: "flex",
  flexDirection:"column",
  gap:"3.75rem"
  }));

export const CusTitle = styled(Typography)<BoxProps>(({ theme }) => ({
    ...theme.typography.SubHeading1, // Áp dụng toàn bộ thuộc tính từ theme
    color: theme.palette.background.black,
    fontWeight: theme.typography.fontWeightBold
  }));
  export const Cusspan = styled("span")<BoxProps>(({ theme }) => ({
   
    color: theme.palette.primary.main,
  
  }));
  export const BoxIcon = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
    width: "3vw",
    height: "3vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      width:"6vw",
      height:"6vw",
      // width:"auto",
      // margin:"0 auto"
    },
  }));
  
  export const CusIcon = styled("img")<BoxProps>(({ theme }) => ({
   
  
  width:"1vw",
  height:"1vw",
  [theme.breakpoints.down("lg")]: {
    width:"3vw",
    height:"3vw",
    // width:"auto",
    // margin:"0 auto"
  },
  }));
  export const BoxItem = styled(Box)<BoxProps>(({ theme }) => ({
   
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    gap:"1rem"
  }));
  export const CusContent = styled(Box)<BoxProps>(({ theme }) => ({
    width:"70%",
    display:"flex",
    flexDirection:"column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    
  }));
  export const CusHeading = styled(Typography)<BoxProps>(({ theme }) => ({
    ...theme.typography.SubHeading1,

  
  }));
  export const CusText = styled(Typography)<BoxProps>(({ theme }) => ({
    ...theme.typography.Paragraph2,
    textAlign:"justify",
  
  }));
  
  
  