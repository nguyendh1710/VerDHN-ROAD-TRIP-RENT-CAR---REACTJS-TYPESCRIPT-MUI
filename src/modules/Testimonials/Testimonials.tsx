import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import {
  TestimonialsBg,
  TestimonialsContainer,
  CusImg,
  CusTitle,
  CusSubTitle,
  BoxTitle,
  CusBgRight,
  CusBgLeft,
  Content,
  ContentLeft,
  ContentRight,
  Prev,
  Next,
  BoxTotal,
  ImageBox,
  IndicatorContainer,
  Indicator,
  BoxCarousel,
  CusText,
  BoxName,
  CusName,
  CusRole,
} from "./Testimonials.style";
import data from "../../data/imgTestimonials.json";

// Component tùy chỉnh cho nút prev/next
// const PrevArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <Prev onClick={onClick}>
//       <ArrowBackIosIcon />
//     </Prev>
//   );
// };

// const NextArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <Next onClick={onClick}>
//       <ArrowForwardIosIcon />
//     </Next>
//   );
// };

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
  // prevArrow: React.ReactNode;
  // nextArrow: React.ReactNode;
  beforeChange: (oldIndex: number, newIndex: number) => void;
};









export default function Testimonials() {
  const testimonials = Array.isArray(data) ? data : [];

  const [centerIndex, setCenterIndex] = useState(0);

  // Cấu hình carousel
  const settings: SliderSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 400,
    autoplaySpeed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 968, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    beforeChange: (_, newIndex) => setCenterIndex(newIndex + 1),
  };
  return (
    <TestimonialsBg>
    <TestimonialsContainer maxWidth={false} sx={{ padding: 2 }}>
      <CusTitle>What people are saying </CusTitle>
      <CusSubTitle>What our lovely customer sold for our service </CusSubTitle>
      <CusBgLeft
        src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/ffdefd8709ef55917e404b6a9cae02fa58ffd62c/src/Testimonials/Ellipse%202.svg"
        alt="Sản phẩm chất lượng"
        loading="lazy"
      ></CusBgLeft>
      <CusBgRight
        src="https://raw.githubusercontent.com/nguyendh-xp97/VerDHN-ROAD-TRIP-RENT-CAR-_-LANDING-PAGE---REACTJS-MUI-RESPONSIVE-TYPESCRIPT/ffdefd8709ef55917e404b6a9cae02fa58ffd62c/src/Testimonials/Group%203.svg"
        alt="Sản phẩm chất lượng"
        loading="lazy"
      ></CusBgRight>
      <Content>
        <ContentLeft>
          {/* Carousel */}
          <BoxCarousel>
            <Slider {...settings}>
              {testimonials.map((item, index) => {
                const isCenter = index === centerIndex;
                return (
                  <BoxTotal
                    key={index}
                    // className={isCenter ? "center" : "blur"}
                  >
                    <CusText>{item.comment}</CusText>
                    <BoxName>
                      <CusName>{item.name}</CusName>
                      <CusRole>{item.role}</CusRole>
                    </BoxName>
                  </BoxTotal>
                );
              })}
            </Slider>
          </BoxCarousel>

          {/* Indicator */}
          <IndicatorContainer>
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Indicator key={i} active={i === centerIndex % 4} />
              ))}
          </IndicatorContainer>
        </ContentLeft>
        <ContentRight>
          {testimonials.map((item) => {
            return (
              <CusImg
                key={item.id}
                src={item.uri}
                alt={item.name}
                width={item.width}
                height={item.height}
                top={item.top}
                left={item.left}
              />
            );
          })}
        </ContentRight>
      </Content>
    </TestimonialsContainer>
    </TestimonialsBg>
  );
}
