import { Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledContainer,
  CusTitle,
  BoxCarousel,
  Prev,
  Next,
} from "./BrandName.style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import data from "../../../data/logoData.json";

// Kiểm tra nếu `data` tồn tại, nếu không thì đặt thành mảng rỗng
const logos: string[] = Array.isArray(data) ? data : [];
// Component tùy chỉnh cho nút prev/next để chặn props không hợp lệ
const PrevArrow = (props: any) => {
  const { onClick } = props; // Chỉ nhận `onClick`, bỏ `currentSlide`
  return (
    <Prev onClick={onClick}>
      <ArrowBackIosIcon />
    </Prev>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Next onClick={onClick}>
      <ArrowForwardIosIcon />
    </Next>
  );
};

type SliderSettings = {
  dots: boolean; // Chỉ cần kiểu boolean, không cần ép kiểu
  infinite: boolean;
  autoplay:boolean;
  speed: number;
  autoplaySpeed: number, 
  slidesToShow: number;
  slidesToScroll: number;
  responsive: {
    breakpoint: number;
    settings: { slidesToShow: number };
  }[];
  prevArrow: React.ReactNode;
  nextArrow: React.ReactNode;
};

export default function BrandName(props: any) {
  //Carousel
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    autoplay:true, // bật chế độ tự động chạy
    speed: 400,
    autoplaySpeed: 700, // Giảm thời gian chờ mỗi slide (ms)
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 7 } },
      { breakpoint: 968, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
      { breakpoint: 400, settings: { slidesToShow: 2 } },
    ],
    prevArrow: (
      <PrevArrow>
        <ArrowBackIosIcon /> {/* Mũi tên trái */}
      </PrevArrow>
    ),
    nextArrow: (
      <NextArrow>
        <ArrowForwardIosIcon /> {/* Mũi tên phải */}
      </NextArrow>
    ),
  };
  return (
    <StyledContainer>
      <CusTitle>Trusted by more than 50+ brands</CusTitle>
      {/* Carousel */}
      <BoxCarousel sx={{ width: "1199px", maxWidth: "100%", mx: "auto" }}>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: "57px",
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                width={74}
                height={74}
              />
            </Box>
          ))}
        </Slider>
      </BoxCarousel>
    </StyledContainer>
  );
}
