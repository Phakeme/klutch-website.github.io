import Head from "next/head";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import { AboutContainer } from "../containers/about";
import { WhyChooseUsContainer } from "../containers/whyChooseUs";
// import { FormContainer } from "../containers/form";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Klutch Plastic Surgery Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer />
      <HeroContainer />
      <AboutContainer />
      {/* <FormContainer /> */}
      <WhyChooseUsContainer />
      <FooterContainer />
    </div>
  );
}
