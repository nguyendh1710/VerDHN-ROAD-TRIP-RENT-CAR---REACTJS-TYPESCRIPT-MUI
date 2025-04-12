
import {Container, Box,Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import background from "./../../assets/hero-bg.png";

// Tạo Grid tùy chỉnh với styled
export const HeroContainer = styled(Container)(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  width: "100%",
  //tùy chỉnh min-height -> min-height:...vh thì background nó sẽ tự động responsive khi co lại đảm bảo full màn hình
  height:  "787px", // Giữ nguyên height từ Figma
  maxHeight: "40%", // Đảm bảo không vượt quá màn hình
  // minHeight: "500px", // Đảm bảo không quá nhỏ đến giới hạn nào đó nếu cần
  overflow: "hidden", // Ngăn chặn nội dung tràn
  backgroundImage:`url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  //Đảm bảo để có thể sử dụng pseudo-element như hover,before, after nếu có
  position: "relative",
  display:"flex",

  flexDirection:"column",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  gap:"5.4375rem",
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display:"flex",
  flexGrow:"1",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:"2.9375rem",
  width: "836px",
  maxWidth:"100%",
  height:"auto",

}));
export const BoxText = styled(Box)(({ theme }) => ({

}));
export const CusTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.Heading1, // Áp dụng toàn bộ thuộc tính từ theme

}));
export const BoxBtn = styled(Box)(({ theme }) => ({
 display:"flex",
 flexGrow:"1",
 flexDirection:"row",
 gap:"2.4375rem",
}));