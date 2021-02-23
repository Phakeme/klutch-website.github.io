import React from "react";
import { Header } from "../components";
import Link from "next/link";

export function HeaderContainer({ children }) {
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
            <Header.LinkItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </Header.LinkItem>
            <Header.LinkItem>
              <Link href="/procedures">
                <a>Procedures</a>
              </Link>
            </Header.LinkItem>
            <Header.LinkItem>
              <Link href="/about">
                <a>About</a>
              </Link>
            </Header.LinkItem>

            <Header.LinkItem>
              <Link href="/contacts">
                <a>Contact</a>
              </Link>
            </Header.LinkItem>
          </Header.NavItems>
        </Header.Nav>
      </Header.Inner>
    </Header>
  );
}
