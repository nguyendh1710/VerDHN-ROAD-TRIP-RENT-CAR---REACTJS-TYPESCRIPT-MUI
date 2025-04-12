
import {Container} from "@mui/material";
import { styled } from "@mui/material/styles";

// Tạo Grid tùy chỉnh với styled
export const CusWrapper = styled(Container)(({ theme }) => ({
   maxWidth: "1200px",  // Giới hạn tối đa 1170px thay vì cố định -> giúp co dãn theo nội dung khi responsive
   width: "100%",        // Giúp co giãn theo màn hình nhỏ hơn -> giúp co dãn theo nội dung khi responsive
   margin: "0 auto",
}));