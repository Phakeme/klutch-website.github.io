import React from "react";
import { Footer, Hero } from "../../components/index";
import { FaRegMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function FooterContainer({ children }) {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Inner>
          <Footer.Card>
            <div>
              <FaRegMap size="3rem" color="#d26f8f" />
            </div>
            <a
              href="https://www.google.com/maps/search/krugersdorp+netcare/@-26.0834202,27.7677978,13z/data=!3m1!4b1"
              target="blank"
            >
              <span style={{ marginLeft: "30px" }}>Find Us On Google Maps</span>
            </a>
          </Footer.Card>
          <Footer.Card>
            <Footer.Card>
              <div>
                <FaPhoneAlt size="2rem" color="#d26f8f" />
              </div>
              <div>
                <p style={{ marginLeft: "30px", marginTop: "0" }}>
                  Book an appointment
                </p>
                <h3 style={{ marginLeft: "30px" }}>(031) 301 0418</h3>
              </div>
            </Footer.Card>
          </Footer.Card>
          <Footer.Card>
            <Footer.Card>
              <div>
                <FaEnvelope size="2rem" color="#d26f8f" />
              </div>
              <div>
                <p style={{ marginLeft: "30px", marginTop: "0" }}>
                  Feel free to message us!
                </p>
                <h3 style={{ marginLeft: "30px" }}>ouremail.website.com</h3>
              </div>
            </Footer.Card>
          </Footer.Card>
        </Footer.Inner>
      </Footer.Wrapper>
    </Footer>
  );
}
