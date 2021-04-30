import React, { useState, useEffect } from "react";
import axios from 'axios'
import Link from "next/link";
import { Header, NavMobile } from "../../../components/";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import { FaRegMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function HeaderContainer() {
  const [contactinfo, setContactinfo] = useState('')

  useEffect(() => {
    axios.get('/api/contactinfo').then(response => {
      setContactinfo(response.data)
    })
  }, [])

  const router = useRouter();
  return (
    <Header>
      <Header.Inner>
        <Header.SocialLinks>
          <Header.SocialDetails>
            <Header.Address>
              <FaRegMap size="1.2rem" />
              <span>Ribumed Hospital Glenwood, Berea |</span>
              <span>Life Mount Edgecombe Hospital, Life Mount Edgecombe </span>
            </Header.Address>
            <Header.Tell>
              <FaPhoneAlt size="1rem" />
              <span>{contactinfo.tell}</span>
            </Header.Tell>
            <div>
              <FaEnvelope size="1rem" />
              <span>{contactinfo.email}</span>
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
