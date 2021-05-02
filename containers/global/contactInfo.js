import React from "react";
import Data from '../../data/contacts-db.json'
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
                <p>{Data.address1}</p>
                <p>{Data.address2}</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>
            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <RiContactsBookUploadFill />
              </ContactInfo.Icon>

              <ContactInfo.Info>
                <span>CONTACT US</span>
                <p>{Data.tell}</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>

            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <IoMdMail />
              </ContactInfo.Icon>
              <ContactInfo.Info>
                <span>EMAIL</span>
                <p>{Data.email}</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>

            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <FaHourglassHalf />
              </ContactInfo.Icon>

              <ContactInfo.Info>
                <span>OPEN HOURS</span>
                <p>{Data.opendays.weekdays}</p>
                <p>{Data.opendays.saturday}</p>
                <p>{Data.opendays.sunday}</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>
          </ContactInfo.Inner>
        </ContactInfo.Details>
      </ContactInfo.Wrapper>
    </ContactInfo>
  );
}
