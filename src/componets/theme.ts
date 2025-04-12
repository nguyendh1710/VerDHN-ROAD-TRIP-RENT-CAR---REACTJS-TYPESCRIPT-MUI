import { createTheme, ThemeOptions } from "@mui/material/styles";
import "@fontsource/montserrat"; // Font chính
import "@fontsource/montserrat-alternates"; // Font thay thế

// 🔹 Mở rộng TypographyOptions để thêm `fontSizeContent`
declare module "@mui/material/styles" {
  interface TypeBackground {
    white?: string; //Khai báo thêm grey
    grey?: string; //Khai báo thêm grey
    black?: string; //Khai báo thêm grey
  }
  interface Typography {
    fontSizeContent: number; //  Thêm thuộc tính vào Typography
    fontFamilyPrimary: string;
    lineHeightContent: number;
  }
  interface TypographyOptions {
    fontSizeContent?: number; // Thêm thuộc tính vào TypographyOptions
    fontFamilyPrimary: string;
    lineHeightContent: number;
  }
  interface TypographyVariants {
    Heading1: React.CSSProperties;
    Heading2: React.CSSProperties;
    SubHeading1: React.CSSProperties;
    Paragraph2: React.CSSProperties;
    Button1: React.CSSProperties;
    Button2: React.CSSProperties;
  }

  // Cho phép sử dụng các variant mới trong TypographyProps
  interface TypographyVariantsOptions {
    Heading1?: React.CSSProperties;
    Heading2?: React.CSSProperties;
    SubHeading1?: React.CSSProperties;
    Paragraph2?: React.CSSProperties;
    Button1?: React.CSSProperties;
    Button2?: React.CSSProperties;
  }

}

// 🔹 Khởi tạo theme với typography mở rộng
const theme = createTheme({
  palette: {
    primary: {
      main: "#00816F",
    },
    secondary: {
      main: "#FEA501",
    },
    background: {
      white: "#FDFDFD",
      grey: "#8F8F8F",
      black: "#2B2B2B",
    },
  },
  typography: {
    // Font fammily
    fontFamily: "'Montserrat', sans-serif",
    fontFamilyPrimary: "'Montserrat Alternates', sans-serif", // ✅ Font phụ (tùy chỉnh)
    // Font size
    fontSize: 14, // Font size mặc định
    fontSizeContent: 16,
    // Font weight
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    // Line height 
    lineHeight: 1.5, // ✅ Line height mặc định
    lineHeightContent: 1.8, // ✅ Line height cho nội dung

    //Heading 1
    Heading1: {
      fontFamilyPrimary: "'Montserrat Alternates', sans-serif",
      fontSize: "48px", // Font size (ví dụ)
      lineHeight: "5rem", // lineHeight = 80px / 16 = 5rem
      fontWeightBold: 700,

    },
    //Heading 2
    Heading2: {
      fontFamilyPrimary: "'Montserrat Alternates', sans-serif",
      fontSize: "3rem", // rem = 16px  →  48px = 48 / 16 = 3rem
      lineHeight: "normal", // lineHeight = auto trong figma  giá trị tương đương là normal hoặc tỷ lệ số (lineHeight: 1.2, 1.5, v.v.) thay vì đơn vị px hoặc rem.
      fontWeightSemibold: 600,
    },
    // Sub Heading 1
    SubHeading1: {
      fontFamilyPrimary: "'Montserrat', sans-serif",
      fontSize: "1.66rem", // Font size (ví dụ)
      lineHeight: "normal", // lineHeight = auto trong figma  giá trị tương đương là normal hoặc tỷ lệ số (lineHeight: 1.2, 1.5, v.v.) thay vì đơn vị px hoặc rem.
      fontWeightSemibold: 600,
    },
    //    Paragraph 2
    Paragraph2: {
      fontFamilyPrimary: "'Montserrat', sans-serif",
      fontSize: "1.03625rem", // Font size (ví dụ)
      lineHeight: "normal", // lineHeight = auto trong figma  giá trị tương đương là normal hoặc tỷ lệ số (lineHeight: 1.2, 1.5, v.v.) thay vì đơn vị px hoặc rem.
      fontWeightRegular: 400, // Sử dụng fontWeightRegular (400) cho Paragraph2
    },
    //Button1
    Button1: {
      fontFamilyPrimary: "'Montserrat', sans-serif",
      fontSize: "1.25rem", // Font size (ví dụ)
      lineHeight: "normal", // lineHeight = auto trong figma  giá trị tương đương là normal hoặc tỷ lệ số (lineHeight: 1.2, 1.5, v.v.) thay vì đơn vị px hoặc rem.
      fontWeightMedium: 500,
    },
    //Button1
    Button2: {
      fontFamilyPrimary: "'Montserrat', sans-serif",
      fontSize: "0.65rem", // Font size (ví dụ)
      lineHeight: "normal", // lineHeight = auto trong figma  giá trị tương đương là normal hoặc tỷ lệ số (lineHeight: 1.2, 1.5, v.v.) thay vì đơn vị px hoặc rem.
      fontWeightMedium: 500,
    },
  },
  shape: {
    borderRadius: 10, // Chuyển từ "10px" thành 10
  
  },
  shadows: [
    "none", 
    "5px 5px 0px black", 
    "0px 4px 6px rgba(0,0,0,0.1)", 
    "0px 6px 10px rgba(0,0,0,0.15)", 
    ...Array(21).fill("none"), // Đảm bảo đủ 25 phần tử
  ] as ThemeOptions["shadows"],


} as ThemeOptions); // 🔹 Ép kiểu về ThemeOptions để tránh lỗi TypeScript

export default theme;
