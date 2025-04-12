import { Button } from "@mui/material";
import { styled } from "@mui/material/styles"; // 🔹 Nên import từ MUI styles để hỗ trợ theme

// ✅ Styled Button sử dụng theme
export const StyledButton = styled(Button)(({ theme, size, variant }: { theme: any; size?: "small" | "medium" | "large"; variant?: "contained" | "outlined" | "text"; }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 
  size === "large" ? "200px" 
    : size === "medium" ? "185px"
    : "105px", // ✅ Width nếu là small hoặc medium còn lại là 20vw
  // width: "165px",
  maxWidth: "100%",
  //   height: 
  // size === "small" ? "9vh" 
  // : size === "medium" ? "25vh"  
  // : "28vh", // ✅ Height nếu là small hoặc medium còn lại là 28vw
  height: "54px",
  // padding:
  //   size === "small"? theme.spacing(0.5, 1.5) // 🟢 Padding nhỏ hơn khi size=small
  //     : size === "large"
  //     ? theme.spacing(1.5, 3) // 🟢 Padding lớn hơn khi size=large
  //     : theme.spacing(1, 2), // 🟢 Mặc định là medium
  padding: "20px 40px",
  gap: "10px",
  borderColor: variant === "contained" ? theme.palette.secondary.main
    : variant === "outlined" ? theme.palette.secondary.main : theme.palette.background.white,
  // backgroundColor: theme.palette.secondary.main,
  backgroundColor: variant === "contained" ? theme.palette.secondary.main
    : variant === "outlined" ? theme.palette.background.white : theme.palette.background.white,
  color: theme.palette.background.black,
  borderRadius: theme.shape.borderRadius, // Sử dụng bo góc từ theme
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold, // Font weight từ theme
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    opacity: 0.9,
    backgroundColor: theme.palette.secondary.dark, // Màu hover theo theme
  },
}));
