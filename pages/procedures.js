import { FooterContainer } from "../containers/global/footer";
import { HeaderContainer } from "../containers/global/header/header";
import { ProceHeroContainer } from "../containers/pages/procedures/proceStaticHero";
// import { ProceOverviewContainer } from "../containers/pages/procedures/ProceOverview";

export default function Procedures() {
  return (
    <>
      <HeaderContainer />
      <ProceHeroContainer />
      {/* <ProceOverviewContainer /> */}
      <FooterContainer />
    </>
  );
}
