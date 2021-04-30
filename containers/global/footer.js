import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Footer } from "../../components/index";
import { FaRegMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function FooterContainer() {
  const [contactinfo, setContactinfo] = useState('')
  useEffect(() => {
    axios.get('/api/contactinfo').then(response => {
      setContactinfo(response.data)
    })
  }, [])
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Inner>
          <Footer.Card>
            <div>
              <FaRegMap size="3rem" color="#d26f8f" />
            </div>
            <div>
              <p style={{ marginLeft: "30px", marginTop: "0" }}>
                <a
                  href="https://www.google.com/maps/search/krugersdorp+netcare/@-26.0834202,27.7677978,13z/data=!3m1!4b1"
                  target="blank"
                >
                  Find Us On Google Maps
                </a>
              </p>
              <h3 style={{ marginLeft: "30px" }}>Come and visit us</h3>
            </div>
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
                <h3 style={{ marginLeft: "30px" }}>{contactinfo.tell}</h3>
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
                <h3 style={{ marginLeft: "30px" }}>
                  {contactinfo.email}
                </h3>
              </div>
            </Footer.Card>
          </Footer.Card>
        </Footer.Inner>
      </Footer.Wrapper>
    </Footer>
  );
}
