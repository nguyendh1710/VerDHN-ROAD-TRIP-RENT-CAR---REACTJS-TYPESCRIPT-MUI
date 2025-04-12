import { BrandContainer } from "./Brand.style";
import BrandInfo from "./BrandInfo/BrandInfo";
import BrandName from "./BrandName/BrandName";

export default function Brand() {
  return (
    <BrandContainer sx={{ padding: 2, maxWidth: 'none' }} component="section">
      <BrandName />
      <BrandInfo/>
    </BrandContainer>
  );
}
