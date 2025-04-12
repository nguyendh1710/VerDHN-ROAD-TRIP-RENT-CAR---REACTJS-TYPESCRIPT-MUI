
import {Container, Box,Typography,BoxProps} from "@mui/material";
import { styled } from "@mui/material/styles";
import background from "./../../assets/hero-bg.png";
import { textAlign } from "@mui/system";

// Tạo Grid tùy chỉnh với styled
export const CTABg = styled(Container)<BoxProps>(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa

  height:  "auto",
  overflow: "hidden", // Ngăn chặn nội dung tràn
  paddingTop:"5rem",
  paddingBottom:"5rem",
 
}));
export const CTAContainer = styled(Container)(({ theme }) => ({
  width:"1200px",
  maxWidth: "100%",
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  minHeight: "380px", // ✅ Dùng `minHeight` thay vì `height`
  height: "auto", // ✅ Để component tự co giãn
  maxHeight: "100%", // ✅ Loại bỏ giới hạn tối đa
  overflow: "visible", // ✅ Cho phép nội dung hiển thị đầy đủ
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url("https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/a2744ed6ff82ec8ddd7e8ff2196835641e145535/src/CTA/Frame%20729.svg")`,
  //Đảm bảo để có thể sử dụng pseudo-element như hover,before, after nếu có
  position: "relative",
  display:"flex",
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  gap:"3rem",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Cải thiện shadow
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
    width: "279.366px",
    maxWidth: "100%",
    objectFit:"cover",
    //tùy chỉnh min-height -> min-height:...vh thì background nó sẽ tự động responsive khi co lại đảm bảo full màn hình
    height:  "auto", // Giữ nguyên height từ Figma
    // [theme.breakpoints.down("lg")]: {
    //   width: "100%",
    //   height: "40%",
    //   flexDirection:"column",
    // },
    
    position:"absolute",
    top:"-12vh",
    left:"50vw"
  }));
  export const BoxContent = styled(Box)(({ theme }) => ({
    display:"flex",
    flexGrow:"1",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    gap:"5rem",
    width: "622px",
    maxWidth:"100%",
    height:"auto",
    marginTop:"3rem"
  }));
   export const BoxText = styled(Box)(({ theme }) => ({

   }));
   export const CusTypography = styled(Typography)(({ theme }) => ({
     ...theme.typography.Heading2, // Áp dụng toàn bộ thuộc tính từ theme
     color: theme.palette.background.white,
     textAlign:"justify",
   }));
   export const    CusAccent = styled('span')(({ theme }) => ({
    ...theme.typography.Heading2, // Áp dụng toàn bộ thuộc tính từ theme
    color: theme.palette.secondary.main
  }));
  export const    CusText = styled(Typography)(({ theme }) => ({
    ...theme.typography.Paragraph2, // Áp dụng toàn bộ thuộc tính từ theme
    color: theme.palette.background.white,
    textAlign:"justify",
  }));
  
   export const BoxBtn = styled(Box)(({ theme }) => ({
    display:"flex",
    flexGrow:"1",
    flexDirection:"row",
    gap:"2.4375rem",
 
   }));