import { height } from '@mui/system';
import { Container, Box, Typography, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Tạo Grid tùy chỉnh với styled
export const TestimonialsBg = styled(Container)(({ theme }) => ({

  position:"relative",
  height:"100vh"
}));

export const CusBgLeft= styled("img")(({ theme }) => ({
  width: "100%", // 🔹 Giống Bootstrap img-fluid
  height: "auto", // 🔹 Đảm bảo tỷ lệ ảnh không bị méo
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  position:"absolute",

  top:"-38vh",
  left:"-73vw",
  
}));
export const CusBgRight= styled("img")(({ theme }) => ({
  width: "100%", // 🔹 Giống Bootstrap img-fluid
  height: "auto", // 🔹 Đảm bảo tỷ lệ ảnh không bị méo
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  position:"absolute",
  top:"-38vh",
  right:"-70vw",
}));
export const TestimonialsContainer = styled(Container)(({ theme }) => ({
  width:"1200px",
  maxWidth: "100%",
  height: "auto",
  maxHeight: "40%",
  minHeight: "500px",



}));
export const BoxTitle = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "342px",
  maxWidth: "100%",
  margin: "0 auto"
}));
export const CusTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.Heading2, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.black,
  fontWeight: theme.typography.fontWeightBold,
}));
export const CusSubTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.Button1, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.black,
}));



export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%",
  height:"auto",
  margin: "0 auto",
  gap: "6.375rem",
  marginTop:"5.375rem",
}));
export const ContentLeft = styled(Box)<BoxProps>(({ theme }) => ({
  width: "50%",
  maxWidth: "100%",
  height:"auto",

}));

export const BoxTotal = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  transition: "transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease",
  borderRadius: theme.shape.borderRadius,
  padding:"2rem",
  marginBottom:"2rem",
  border: "1px solid " + theme.palette.background.grey, // Định nghĩa đầy đủ border
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Cải thiện shadow
  "&.center": {
    transform: "scale(1.2)",
    filter: "none",
    opacity: 1,
  },
  "&.blur": {
    transform: "scale(1)",
    filter: "blur(4px)",
    opacity: 0.5,
  },
}));
export const BoxCarousel = styled(Box)<BoxProps>(({ theme }) => ({
  // width: "1199px",
  width:"80%",
  maxWidth: "100%",
  margin: "0 auto",
  position: "relative",
  borderRadius:"3rem",

}));
// Tạo Styled Component cho nút "Previous"
export const Prev = styled(Box)(({ theme }) => ({
  position: "absolute",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "50%",
  zIndex: 1, // Đảm bảo nút không bị che khuất
  color: "#322e2e",
  fontSize: "30px",
  top: "38%",
  left: "-12%"
}));
// Tạo Styled Component cho nút "Next"
export const Next = styled(Box)(({ theme }) => ({
  position: "absolute",
  cursor: "pointer",
  borderRadius: "50%",
  zIndex: 1, // Đảm bảo nút không bị che khuất
  color: "#322e2e",
  fontSize: "30px",
  top: "38%",
  right: "-12%",
  [theme.breakpoints.down("lg")]: {
    top: "-8vh",
    fontSize: "90px",
  },
}));
export const ImageBox = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    transition: "transform 0.5s ease-in-out",
  },
});

// Overlay mờ 1/3 ảnh hai bên
export const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5))",
  zIndex: 1,
});
// **Indicator Container** - Hiển thị indicator dạng column (theo chiều dọc)
export const IndicatorContainer = styled(Box)({
  display: "flex",
  flexDirection: "column", // ✅ Xếp theo chiều dọc
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  position: "absolute",
  bottom: "56vh", // ✅ Đưa vào giữa chiều cao
  left: "44vw", // ✅ Căn sang bên trái
  transform: "translateY(50%)", // ✅ Căn chỉnh vị trí
  zIndex: 3,
});

// **Indicator Style** - Button hình chữ nhật, hiệu ứng Dynamic Island
export const Indicator = styled(Box)<{ active?: boolean }>(({ active, theme }) => ({
  width: "7px", // ✅ Luôn là hình chữ nhật ngang
  height: "16px", // ✅ Chiều cao cố định
  background: active ? theme.palette.primary.main : "#ccc",
  borderRadius: "5px", // ✅ Bo góc nhẹ, không phải elipse
  transition: "all 0.5s ease-in-out",
}));

export const BoxName = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // ✅ Xếp theo chiều dọc
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
  paddingTop:"2rem",
 
}));
export const CusText = styled(Typography)(({ theme }) => ({
  ...theme.typography.Paragraph2, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.black,
   textAlign:"justify"
}));
export const CusName = styled(Typography)(({ theme }) => ({
  ...theme.typography.Button1, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.black,
  fontWeight:"bold",
}));
export const CusRole = styled(Typography)(({ theme }) => ({
  ...theme.typography.Button2, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.black,
}));

export const ContentRight = styled(Box)<BoxProps>(({ theme }) => ({
  width: "40%",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  height:"auto",
  position:"relative",
  backgroundColor:"green"
}));
export const CusImg = styled("img")<{
  width?: string;
  height?: string;
  top?: string;
  left?: string;
}>(({ theme, width, height, top = 10, left = 10 }) => ({
  width: width || "auto",
  maxWidth: "100%",
  height: height || "auto", 
  objectFit: "cover",
  borderRadius: "50%",
  position: "absolute",
  top: `${top}vh`,  // Nhận giá trị từ props
  left: `${left}vw`, // Nhận giá trị từ props
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)"
  }
}));
