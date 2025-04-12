
import {Container, Box,Typography,BoxProps} from "@mui/material";
import { styled } from "@mui/material/styles";



// Tạo Grid tùy chỉnh với styled
export const FooterBg = styled(Container)<BoxProps>(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa

  height:  "auto",
  overflow: "hidden", // Ngăn chặn nội dung tràn
  paddingTop:"5rem",
  paddingBottom:"5rem",

}));
export const FooterContainer = styled(Container)(({ theme }) => ({
  width:"1200px",
  maxWidth: "100%",
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  minHeight: "380px", // ✅ Dùng `minHeight` thay vì `height`
  height: "auto", // ✅ Để component tự co giãn
  maxHeight: "100%", // ✅ Loại bỏ giới hạn tối đa
  //Đảm bảo để có thể sử dụng pseudo-element như hover,before, after nếu có
  position: "relative",
  display:"flex",
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  gap:"3rem",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Cải thiện shadow
  backgroundColor:'gold',
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
export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  // marginRight: "3.5rem",
  width: "444px",
  maxWidth:"100%",
  height:"auto"
});
export const Logo = styled("img")(({ theme }) =>({
  height: "52px",
  width: "52px",
  marginTop: "10px",
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
export const BoxTitle = styled(Box)(({ theme }) => ({
  display:"flex",
  flexGrow:"1",
  flexDirection:"column",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  gap:"1px",
 
}));
export const CusTextTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Days One",
  fontSize: "1rem",
  fontWeight: 250,
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
  fontSize: "2.5rem",
  fontWeight: 700,
  color: theme.palette.secondary.main,
}));
export const CusTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Days One",
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "rgba(0, 129, 111, 1)",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",

  },
  [theme.breakpoints.down("sm")]: {
   
    fontSize: "0.7rem",
  },
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
   export const BoxInput = styled(Box)(({ theme }) => ({
    display:"flex",
    flexGrow:"1",
    flexDirection:"row",
    gap:"2.4375rem",
 
   }));
   