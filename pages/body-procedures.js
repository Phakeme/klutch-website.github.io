import Head from 'next/head'
import { FooterContainer } from "../containers/global/footer";
import { ProceHeroContainer } from "../containers/global/procedureHero";
import { HeaderContainer } from "../containers/global/header/header";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Body Procedures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer />
      <ProceHeroContainer />
      <FooterContainer />
    </>
  );
}
