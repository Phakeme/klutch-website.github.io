import React from "react";
import { useRouter } from "next/router";

import { Container } from "../global/container/index";
import {
  Nav,
  SocialLinks,
  Inner,
  Logo,
  LinkItem,
  NavItems,
  SocialDetails,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Inner = function HeaderInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Header.SocialLinks = function HeaderSocialLinks({ children, ...restProps }) {
  return <SocialLinks {...restProps}>{children}</SocialLinks>;
};

Header.SocialDetails = function HeaderSocialDetails({
  children,
  ...restProps
}) {
  return <SocialDetails {...restProps}>{children}</SocialDetails>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.NavItems = function HeaderNavItems({ children, ...restProps }) {
  return <NavItems {...restProps}>{children}</NavItems>;
};

Header.LinkItem = function HeaderLinkItem({ children }) {
  return <LinkItem>{children}</LinkItem>;
};
// Header.Inner = function HeaderInner({ children, ...restProps }) {
//   return <Inner {...restProps}>{children}</Inner>
// }

// export const Navbar = () => {
//     return (
//         <nav className="flex items-center flex-wrap  ">
//            <div className="h-14 flex justify-between items-center flex-no-shrink">
//             <div><p>Contact info here</p></div>
//             <div><p>Social links</p></div>
//         </div>
//         <div className="container px-6 mx-6 max-w-6xl max-w-screen-xl mx-auto ">
//         <NavContacts />
//         <div className="flex justify-between p-6 items-center flex-no-shrink bg-black w-full">
//           <Link href="/"><Image src="/../public/brand-logo.svg" alt="me" width="auto" height="50%" /></Link>

//           <div className="block lg:hidden">
//           </div>
//             <div className="flex text-white">

//               <NavLink name="Home" href="/"/>
//               <NavLink name="About" href="/about"/>
//               <NavLink name="Treatments" href="/treatments"/>
//               <NavLink name="Contacts" href="/contacts"/>
//                 {/* <div className="text-sm lg:flex-grow">
//                   <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
//                     <a  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Home</a>
//                   </Link>
//                   <NavLink name="Phakeme" href="/"/>
//                   <Link href="/about" >
//                      <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">About</a>
//                   </Link>
//                   <Link href="/treatments" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
//                   Treatments
//                   </Link>
//                   <Link href="/contacts" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
//                     Contacts
//                   </Link>
//                 </div> */}

//           </div>
//         </div>
//         </div>
//       </nav>
//     )
// }
