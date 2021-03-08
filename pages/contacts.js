import { FooterContainer } from "../containers/global/footer";
import { ContactUsContainer } from "../containers/pages/contact/contact";
import { HeaderContainer } from "../containers/pages/home/header";

export default function FirstPost() {
  return (
    <>
      <HeaderContainer />
      <ContactUsContainer />
      <FooterContainer />
    </>
  );
}
