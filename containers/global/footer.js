import React from "react";
import Data from '../../data/contacts-db.json'
import { Footer } from "../../components/index";
import { FaRegMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Inner>
          <Footer.Card>
            <div>
              <FaRegMap size="3rem" color="#d26f8f" />
            </div>
            <div>
              <Footer.Text>
                <a
                  href="https://www.google.com/maps/search/krugersdorp+netcare/@-26.0834202,27.7677978,13z/data=!3m1!4b1"
                  target="blank"
                >
                  Find Us On Google Maps
                </a>
              </Footer.Text>
              <Footer.H4>Come and visit us</Footer.H4>
            </div>
          </Footer.Card>
          <Footer.Card>
            <Footer.Card>
              <div>
                <FaPhoneAlt size="2rem" color="#d26f8f" />
              </div>
              <div>
                <Footer.Text>Book an appointment</Footer.Text>
                <Footer.H4>{Data.tell}</Footer.H4>
              </div>
            </Footer.Card>
          </Footer.Card>
          <Footer.Card>
            <Footer.Card>
              <div>
                <FaEnvelope size="2rem" color="#d26f8f" />
              </div>
              <div>
                <Footer.Text>Feel free to message us!</Footer.Text>
                <Footer.H4>
                  {Data.email}
                </Footer.H4>
              </div>
            </Footer.Card>
          </Footer.Card>
        </Footer.Inner>
      </Footer.Wrapper>
    </Footer>
  );
}
