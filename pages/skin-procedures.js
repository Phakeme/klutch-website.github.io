import { FooterContainer } from "../containers/global/footer";
// import { ProceHeroContainer } from "../containers/global/procedureHero/procedureHero";

import { ProcedureHeroMap } from "../containers/global/procedureHero/procedureHeroMap";
import { HeaderContainer } from "../containers/global/header/header";
import { ProceHero } from "../components/index";

export default function Contacts() {
  return (
    <>
      <HeaderContainer />
      <ProceHero>
        <ProceHero.Wrapper>
          <ProcedureHeroMap currentPage="non-surgical" />
        </ProceHero.Wrapper>
      </ProceHero>
      <FooterContainer />
    </>
  );
}
