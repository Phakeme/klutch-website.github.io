import { FooterContainer } from "../containers/global/footer";
import { HeaderContainer } from "../containers/pages/home/header";
import { ProceHeroContainer } from "../containers/pages/procedures/proceHero";
import { ProceOverviewContainer } from "../containers/pages/procedures/ProceOverview";

export default function FirstPost() {
  return (
    <>
      <HeaderContainer />
      <ProceHeroContainer />
      {/* <ProceOverviewContainer /> */}
      <FooterContainer />
    </>
  );
}
