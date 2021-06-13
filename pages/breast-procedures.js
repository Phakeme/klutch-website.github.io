import { ProceHero } from "../components/index";
import { ProcedureHeroMap } from "../containers/global/procedureHero/procedureHeroMap";
import { HeaderContainer } from "../containers/global/header/header";
import { FooterContainer } from "../containers/global/footer";

export default function Contacts() {
  return (
    <>
      <HeaderContainer />
      <ProceHero>
        <ProceHero.Wrapper>
          <ProcedureHeroMap currentPage="breast" />
        </ProceHero.Wrapper>
      </ProceHero>
      <FooterContainer />
    </>
  );
}
