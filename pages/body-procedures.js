import Head from 'next/head'
import { FooterContainer } from "../containers/global/footer";
import { ProcedureHeroMap } from "../containers/global/procedureHero/procedureHeroMap";
import { HeaderContainer } from "../containers/global/header/header";
import { ProceHero } from "../components/index";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Body Procedures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer />
      <ProceHero>
        <ProceHero.Wrapper>
          <ProcedureHeroMap currentPage="body" />
        </ProceHero.Wrapper>
      </ProceHero>
      <FooterContainer />
    </>
  );
}
