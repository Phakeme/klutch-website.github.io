import Head from "next/head";
import { HeaderContainer } from "../containers/pages/home/header";
import { HeroContainer } from "../containers/pages/home/hero";
import { AboutSummaryContainer } from "../containers/pages/home/aboutSummary";
import { WhyChooseUsContainer } from "../containers/whyChooseUs";
import { FormContainer } from "../containers/global/form";
import { FooterContainer } from "../containers/global/footer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Klutch Plastic Surgery Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer />
      <HeroContainer />
      <AboutSummaryContainer />
      <FormContainer />
      <WhyChooseUsContainer />
      <FooterContainer />
    </div>
  );
}
