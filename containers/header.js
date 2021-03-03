import React from "react";
import { Header } from "../components";
import Link from "next/link";
import { useRouter } from "next/router";

export function HeaderContainer({ children }) {
  const router = useRouter();
  return (
    <Header>
      <Header.Inner>
        <Header.SocialLinks>
          <span>Social Links</span>
          <span>Social Links</span>
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
