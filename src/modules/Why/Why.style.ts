import { display, height } from '@mui/system';
import {Container, Box,Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import background from "./../../assets/hero-bg.png";

// Tạo Grid tùy chỉnh với styled
export const WhyContainer = styled(Container)(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  minHeight: "100vh", // ✅ Dùng `minHeight` thay vì `height`
  height: "auto", // ✅ Để component tự co giãn
  maxHeight: "none", // ✅ Loại bỏ giới hạn tối đa
  overflow: "visible", // ✅ Cho phép nội dung hiển thị đầy đủ
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  //Đảm bảo để có thể sử dụng pseudo-element như hover,before, after nếu có
  position: "relative",
  display:"flex",
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  gap:"3rem",
  [theme.breakpoints.down("xl")]: {
    display:"flex",
    flexDirection:"column",
    minHeight: "auto", // ✅ Tránh bị cắt
    height: "auto",
  },
  [theme.breakpoints.down("lg")]: {
    display:"flex",
    flexDirection:"column",
    minHeight: "auto", // ✅ Tránh bị cắt
    height: "auto",
  },
}));
export const CusImg = styled("img")(({ theme }) => ({
    //nếu có width là container-fluid của framework rồi thì không cần width nữa
    width: "100%",
    // objectFit:"cover",
    //tùy chỉnh min-height -> min-height:...vh thì background nó sẽ tự động responsive khi co lại đảm bảo full màn hình
    height:  "729px", // Giữ nguyên height từ Figma
    // [theme.breakpoints.down("lg")]: {
    //   width: "100%",
    //   height: "40%",
    //   flexDirection:"column",
    // },
    marginLeft:"-3%"
  }));
