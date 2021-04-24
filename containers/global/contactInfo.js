import React from "react";
import { ContactInfo } from "../../components/";
import { IoMdPin, IoMdMail } from "react-icons/io";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { FaHourglassHalf } from "react-icons/fa";

export function ContactInfoContainer() {
  return (
    <ContactInfo>
      <ContactInfo.Wrapper name="contact">
        <ContactInfo.Details>
          <ContactInfo.Inner>
            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <IoMdPin />
              </ContactInfo.Icon>
              <ContactInfo.Info>
                <span>COME VISIT</span>
                <p> Ribumed Hospital Glenwood, Berea</p>
                <p> Life Mount Edgecombe Hospital, Life Mount Edgecombe</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>
            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <RiContactsBookUploadFill />
              </ContactInfo.Icon>

              <ContactInfo.Info>
                <span>CONTACT US</span>
                <p>(031) 100 0012</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>

            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <IoMdMail />
              </ContactInfo.Icon>
              <ContactInfo.Info>
                <span>EMAIL</span>
                <p>info@klutchplasticsugery.com</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>

            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <FaHourglassHalf />
              </ContactInfo.Icon>

              <ContactInfo.Info>
                <span>OPEN HOURS</span>
                <p>
                  M-F: 8am – 5pm <br />
                  Sat: 10am – 2pm <br />
                  Sun: Closed
                </p>
              </ContactInfo.Info>
            </ContactInfo.Grid>
          </ContactInfo.Inner>
        </ContactInfo.Details>
      </ContactInfo.Wrapper>
    </ContactInfo>
  );
}
