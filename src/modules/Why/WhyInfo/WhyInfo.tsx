import { Typography, Box } from "@mui/material";
import data from "./../../../data/whyinfo.json";
import {
  StyledContainer,
  CusTitle,
  Cusspan,
  BoxContent,
  CusIcon,
  CusContent,
  CusHeading,
  CusText,
  BoxItem,
  BoxIcon,
} from "./WhyInfo.style";

export default function WhyInfo() {
  const whydatas = data;
  return (
    <StyledContainer>
      <BoxContent>
        <CusTitle >
          Rent a car now <Cusspan >in your hand</Cusspan> . Try it now!
        </CusTitle>
        <BoxContent>
          {whydatas.map((item, index) => (
            <BoxItem key={item.id}>
              <BoxIcon>
                {" "}
                <CusIcon src={item.icon} alt={item.title} />
              </BoxIcon>

              <CusContent>
                <CusHeading>{item.title}</CusHeading>
                <CusText>{item.text}</CusText>
              </CusContent>
            </BoxItem>
          ))}
        </BoxContent>
      </BoxContent>
    </StyledContainer>
  );
}
