// them <BoxProps>vo import de moi them duoc component ben tsx
import { Container, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";


// them <BoxProps> de moi them duoc component ben tsx
export const BrandBg = styled(Container)<BoxProps>(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa

  height:  "auto",
  overflow: "hidden", // Ngăn chặn nội dung tràn


}));
export const BrandContainer = styled(Container)<BoxProps>(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  width:"1200px",
  maxWidth: "100%",
  height:  "auto",
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  gap:"2.4375rem",

}));