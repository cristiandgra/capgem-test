import React from "react";
import { FooterContainer, FooterText, FooterLink } from "./footer.styles";

export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterText>
          2023 by{" "}
          <FooterLink href="https://www.linkedin.com/in/cristiandgr/">
            @cristiandgr
          </FooterLink>
          . All rights reserved.
        </FooterText>
      </FooterContainer>
    </footer>
  );
};
