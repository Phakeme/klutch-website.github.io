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
          <span>Nav Links</span>
        </Header.Nav>
      </Header.Inner>
    </Header>
  );
}
