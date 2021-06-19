import Head from "next/head";
import { HeaderContainer } from "../containers/global/header/header";
import { HeroContainer } from "../containers/pages/home/hero";
import { CategoriesContainer } from '../containers/pages/home/categories/categories'
import { AboutSummaryContainer } from "../containers/pages/home/aboutSummary";
import { WhyChooseUsContainer } from "../containers/pages/home/whyChooseUs";
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
      <CategoriesContainer />
      <AboutSummaryContainer />
      <div className="margin">
        <FormContainer />
      </div>
      <WhyChooseUsContainer />
      <FooterContainer />
    </div>
  );
}
