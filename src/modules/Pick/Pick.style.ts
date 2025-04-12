import { display, margin } from '@mui/system';
import { Container, Box, Typography, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Tạo Grid tùy chỉnh với styled
export const PickContainer = styled(Container)(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  width: "100%",
  //tùy chỉnh min-height -> min-height:...vh thì background nó sẽ tự động responsive khi co lại đảm bảo full màn hình
  height: "auto", // Giữ nguyên height từ Figma
  maxHeight: "40%", // Đảm bảo không vượt quá màn hình
  minHeight: "500px", // Đảm bảo không quá nhỏ đến giới hạn nào đó nếu cần
  overflow: "hidden", // Ngăn chặn nội dung tràn
  backgroundImage: `url("https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/b2a8acbd3bf944815a408de85e3bce9c07c1e5b3/src/Pick/Frame%20685.svg")`,
  background: `
  linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, white 90%),
  url("https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/b2a8acbd3bf944815a408de85e3bce9c07c1e5b3/src/Pick/Frame%20685.svg")
`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  //Đảm bảo để có thể sử dụng pseudo-element như hover,before, after nếu có
  position: "relative",
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
  ...theme.typography.Paragraph2, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.white,
  fontWeight: theme.typography.fontWeightBold,
  fontSize:"3rem",

}));
export const CusSubTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.Button2, // Áp dụng toàn bộ thuộc tính từ theme
  color: theme.palette.background.white,
  fontSize:"1.036rem",


}));
export const CusImg = styled("img")(({ theme }) => ({
  //nếu có width là container-fluid của framework rồi thì không cần width nữa
  width: "50%",
  //tùy chỉnh min-height -> min-height:...vh thì background nó sẽ tự động responsive khi co lại đảm bảo full màn hình
  height: "729px", // Giữ nguyên height từ Figma
}));
