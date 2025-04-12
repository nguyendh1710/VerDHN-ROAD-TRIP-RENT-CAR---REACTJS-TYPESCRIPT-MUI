import { Typography, Box, BoxProps } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledContainer,
  CusTitle,
  BoxCarousel,
  Prev,
  Next,
  BoxTotal,
  ImageBox,
  IndicatorContainer,
  Indicator,
  BoxSpec,
  SpecItem,
  SpecText,
  SpecAccentText,
  SpecIcon,
} from "./PickInfo.style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import data from "../../../data/carInfo.json";
import { useState } from "react";

// Kiểm tra nếu `data` tồn tại, nếu không thì đặt thành mảng rỗng
const cars = Array.isArray(data) ? data : [];

// Component tùy chỉnh cho nút prev/next
const PrevArrow = (props: any) => {
  const { onClick } = props;
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
  dots: boolean;
  infinite: boolean;
  speed: number;
  autoplay: boolean;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: {
    breakpoint: number;
    settings: { slidesToShow: number };
  }[];
  prevArrow: React.ReactNode;
  nextArrow: React.ReactNode;
  beforeChange: (oldIndex: number, newIndex: number) => void;
};

export default function PickInfo() {
  const [centerIndex, setCenterIndex] = useState(0);

  // Cấu hình carousel
  const settings: SliderSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 400,
    autoplaySpeed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 968, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_, newIndex) => setCenterIndex(newIndex + 1),
  };

  // Biểu tượng tương ứng với từng thông số
  const iconMap: { [key: string]: string } = {
    speed:
      "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/b25dfa54d6ca2f2605c76358e7b87224f025ac54/src/Pick/PickInfo/Group%20(1).svg",
    seat: "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/b25dfa54d6ca2f2605c76358e7b87224f025ac54/src/Pick/PickInfo/Group.svg",
    source:
      "https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/b25dfa54d6ca2f2605c76358e7b87224f025ac54/src/Pick/PickInfo/Vector.svg",
  };

  return (
    <StyledContainer>
      {/* Carousel */}
      <BoxCarousel>
        <Slider {...settings}>
          {cars.map((item, index) => {
            const isCenter = index === centerIndex;
            return (
              <BoxTotal key={index} className={isCenter ? "center" : "blur"}>
                <CusTitle>{item.name}</CusTitle>
                <ImageBox>
                  <img
                    src={item.img}
                    alt={`Car ${index + 1}`}
                    width={isCenter ? 400 : 300}
                    height={isCenter ? 180 : 120}
                  />
                </ImageBox>
              </BoxTotal>
            );
          })}
        </Slider>
      </BoxCarousel>

      {/* Indicator */}
      <IndicatorContainer>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Indicator key={i} active={i === centerIndex % 4} />
          ))}
      </IndicatorContainer>
      {/* Chỉ hiển thị thông số nếu xe ở giữa */}
      {cars[centerIndex] && (
        <BoxSpec>
          {Object.entries(cars[centerIndex].specification).map(
            ([key, value]) => (
              <SpecItem key={key}>
                <SpecIcon>
                  <img src={iconMap[key] || ""} alt={key} />
                </SpecIcon>
                <SpecText>
                  <SpecAccentText>{value}</SpecAccentText>
                </SpecText>
              </SpecItem>
            )
          )}
        </BoxSpec>
      )}
    </StyledContainer>
  );
}
