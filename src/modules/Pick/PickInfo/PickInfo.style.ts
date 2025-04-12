// them <BoxProps>vo import de moi them duoc component ben tsx
import { Box, Typography, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import Wrapper from "../../../componets/Wrapper/Wrapper";
import theme from "../../../componets/theme";

// them <BoxProps> de moi them duoc component ben tsx
export const StyledContainer = styled(Wrapper)<BoxProps>(({ theme }) => ({
  paddingTop: "1.25rem",
  paddingBottom: "1.25rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
export const BoxTotal = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease",
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

export const CusTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.SubHeading1, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.grey,
  marginTop: "2.5rem",
  marginBottom: "4.25rem",
  position: "relative",
}));

export const BoxCarousel = styled(Box)<BoxProps>(({ theme }) => ({
  width: "1199px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "relative",

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
  left: "-6%"
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
  right: "-6%",
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
// **Indicator Container** - Hiển thị indicator kiểu Dynamic Island
export const IndicatorContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 3,
  paddingBottom: "34vh"
});

// **Indicator Style** - Tạo hiệu ứng giống Dynamic Island
export const Indicator = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: active ? "40px" : "10px",
  height: "10px",
  background: active ? theme.palette.primary.main : "#ccc",
  borderRadius: "20px",
  transition: "all 0.5s ease-in-out",
}));
export const BoxSpec = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: " 4.6875rem",
  marginTop: "18vh",
  marginBottom:"3vh"

}));
export const SpecItem = styled(Box)<BoxProps>(({ theme }) => ({

}));
export const SpecText = styled(Typography)(({ theme }) => ({
  ...theme.typography.Paragraph2,
  color: theme.palette.background.white
}));
export const SpecAccentText = styled("span")(({ theme }) => ({
  ...theme.typography.SubHeading1,
}));
export const SpecIcon = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: "50%",
  width: "3vw",
  height: "3vw",
  backgroundColor: theme.palette.background.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"

}));