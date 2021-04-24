import { FooterContainer } from "../containers/global/footer";
import { HeaderContainer } from "../containers/pages/home/header";
import { BannerContainer } from "../containers/procedures/banner";

export default function FirstPost() {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <FooterContainer />
    </>
  );
}
