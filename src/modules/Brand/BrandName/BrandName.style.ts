// them <BoxProps>vo import de moi them duoc component ben tsx
import { Box, Typography, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import Wrapper from "../../../componets/Wrapper/Wrapper";


// them <BoxProps> de moi them duoc component ben tsx
export const StyledContainer = styled(Wrapper)<BoxProps>(({ theme }) => ({
  paddingTop: "1.25rem",
  paddingBottom: "1.25rem",
}));
export const CusTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.SubHeading1, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.grey,
  marginTop: "2.5rem",
  marginBottom: "1.25rem",
  position: "relative",
}));

export const BoxCarousel = styled(Box)<BoxProps>(({ theme }) => ({

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
  top: "4%",
}));
// Tạo Styled Component cho nút "Next"
export const Next = styled(Box)(({ theme }) => ({
  position: "absolute",
  cursor: "pointer",
  borderRadius: "50%",
  zIndex: 1, // Đảm bảo nút không bị che khuất
  color: "#322e2e",
  fontSize: "30px",
  top: "20%",
  right:"1%",
  [theme.breakpoints.down("lg")]: {
    top: "-8vh",
    fontSize: "90px",
  },
}));
