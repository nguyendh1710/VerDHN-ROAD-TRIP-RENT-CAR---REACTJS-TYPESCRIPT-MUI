
import { TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Tạo Grid tùy chỉnh với styled
export const CustomGrid = styled(Grid)(({ theme }) => ({
  width: "clamp(200px, 40vw, 468px)",
  maxWidth:"100%",
  height: "clamp(40px, 60px, 80px)",  // Co giãn an toàn
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "2.5rem",
  alignItems: "center",
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  // borderRadius: theme.shape.borderRadius,
}));