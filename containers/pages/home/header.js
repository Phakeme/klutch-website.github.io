import React from "react";
import { Header } from "../../../components/";
import Link from "next/link";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import { FaRegMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function HeaderContainer({ children }) {
  const router = useRouter();
  return (
    <Header>
      <Header.Inner>
        <Header.SocialLinks>
          <Header.SocialDetails>
            <div>
              <FaRegMap size="1.2rem" />
              <span>Ribumed Hospital Glenwood, Berea |</span>
              <span>Life Mount Edgecombe Hospital, Life Mount Edgecombe </span>
            </div>
            <div>
              <FaPhoneAlt size="1rem" />
              <span>(031) 100 0012</span>
            </div>
            <div>
              <FaEnvelope size="1rem" />
              <span>info@klutchplasticsugery.com</span>
            </div>
          </Header.SocialDetails>
          <div>
            <SocialIcon
              url="/contacts"
              target="blank"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="https://www.facebook.com/"
              target="blank"
              style={{ height: 25, width: 25, marginLeft: 20 }}
            />
            <SocialIcon
              url="http://twitter.com/"
              target="blank"
              style={{ height: 25, width: 25, marginLeft: 20 }}
            />
          </div>
        </Header.SocialLinks>

        <Header.Nav>
          <Link href="/">
            <a>
              <Header.Logo src="/brand-logo.svg" alt="Vercel Logo" />
            </a>
          </Link>
          <Header.NavItems>
            <li className={router.pathname == "/" ? "active" : "not-active"}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li
              className={
                router.pathname == "/procedures" ? "active" : "not-active"
              }
            >
              <Link href="/procedures">
                <a>Procedures</a>
              </Link>
            </li>
            <li
              className={router.pathname == "/about" ? "active" : "not-active"}
            >
              <Link href="/about">
                <a>Meet Dr Lutch</a>
              </Link>
            </li>

            <li
              className={
                router.pathname == "/contacts" ? "active" : "not-active"
              }
            >
              <Link href="/contacts">
                <a>Contact</a>
              </Link>
            </li>
          </Header.NavItems>
        </Header.Nav>
      </Header.Inner>
    </Header>
  );
}
