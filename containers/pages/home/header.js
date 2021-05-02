import React from "react";
import Link from "next/link";
import Data from '../../../data/contacts-db.json'
import { Header, NavMobile } from "../../../components/";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import { FaRegMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function HeaderContainer() {
  const router = useRouter();
  return (
    <Header>
      <Header.Inner>
        <Header.SocialLinks>
          <Header.SocialDetails>
            <Header.Address>
              <FaRegMap size="1.2rem" />
              <span>{Data.address1}</span>
              <span>|</span>
              <span>{Data.address2}</span>
            </Header.Address>
            <Header.Tell>
              <FaPhoneAlt size="1rem" />
              <span>{Data.tell}</span>
            </Header.Tell>
            <div>
              <FaEnvelope size="1rem" />
              <span>{Data.email}</span>
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
            <Header.LinkItem>
              <Link href="/">
                <li
                  className={router.pathname == "/" ? "active" : "not-active"}
                >
                  <a>Home</a>
                </li>
              </Link>
            </Header.LinkItem>
            <Header.LinkItem>
              <Link href="/procedures">
                <li
                  className={
                    router.pathname == "/procedures" ? "active" : "not-active"
                  }
                >
                  <a>Procedures</a>
                </li>
              </Link>
            </Header.LinkItem>
            <Header.LinkItem>
              <Link href="/about">
                <li
                  className={
                    router.pathname == "/about" ? "active" : "not-active"
                  }
                >
                  <a>Meet Dr Lutch</a>
                </li>
              </Link>
            </Header.LinkItem>

            <Header.LinkItem>
              <Link href="/contacts">
                <li
                  className={
                    router.pathname == "/contacts" ? "active" : "not-active"
                  }
                >
                  <a>Contact</a>
                </li>
              </Link>
            </Header.LinkItem>
          </Header.NavItems>
          <NavMobile>
            <NavMobile.Icon></NavMobile.Icon>
          </NavMobile>
        </Header.Nav>
      </Header.Inner>
    </Header>
  );
}
