import { display, margin } from '@mui/system';
import { Container, Box, Typography, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Tạo Grid tùy chỉnh với styled
export const PickDiscountContainer = styled(Container)(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  width: "759px",
  maxWidth:"100%",
  height: "auto", // Đảm bảo không vượt quá màn hình
  overflow: "hidden", // Ngăn chặn nội dung tràn
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  backgroundColor:theme.palette.background.white,
  borderRadius:theme.shape.borderRadius,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap:"1.125rem",
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
export const CusBoxTitle = styled(Box)<BoxProps>(({ theme }) => ({
  ...theme.typography.Button2, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.black,
  fontWeight: theme.typography.fontWeightBold,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
export const CusSubTitle1 = styled(Typography)(({ theme }) => ({
  ...theme.typography.Paragraph2, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.primary.main,
  fontSize:"1.36rem",
}));
export const CusSubTitle2 = styled(Typography)(({ theme }) => ({
    ...theme.typography.Button2,
    color: theme.palette.background.grey,
    fontSize:"1.036rem",
  }));
export const CusImg = styled("img")(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  width: "4vw",
  //tùy chỉnh min-height -> min-height:...vh thì background nó sẽ tự động responsive khi co lại đảm bảo full màn hình
  height: "4vh", // Giữ nguyên height từ Figma
}));
export const BoxBtn = styled(Box)<BoxProps>(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap:"1.25rem",
  }));
