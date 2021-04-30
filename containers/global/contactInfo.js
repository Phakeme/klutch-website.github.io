import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContactInfo } from "../../components/";
import { IoMdPin, IoMdMail } from "react-icons/io";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { FaHourglassHalf } from "react-icons/fa";

export function ContactInfoContainer({ children }) {
  const [contactInfo, setContactInfo] = useState("");
  const [opendays, setOpendays] = useState([])

  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setContactInfo(response.data);
      // console.log(response.data.openHours.sunday)
    });
  }, []);

  useEffect(() => {
    axios.get("/api/opendays").then((response) => {
      setOpendays(response.data);
      // console.log(response.data.openHours.sunday)
    });
  }, []);

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
                <p>{contactInfo.tell}</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>

            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <IoMdMail />
              </ContactInfo.Icon>
              <ContactInfo.Info>
                <span>EMAIL</span>
                <p>{contactInfo.email}</p>
              </ContactInfo.Info>
            </ContactInfo.Grid>

            <ContactInfo.Grid>
              <ContactInfo.Icon>
                <FaHourglassHalf />
              </ContactInfo.Icon>

              <ContactInfo.Info>
                <span>OPEN HOURS</span>
                {opendays.map(item => (
                  <div key={item.sunday}>
                    <p>{item.weekdays}</p>
                    <p>{item.saturday}</p>
                    <p>{item.sunday}</p>
                  </div>
                ))}
              </ContactInfo.Info>
            </ContactInfo.Grid>
          </ContactInfo.Inner>
        </ContactInfo.Details>
      </ContactInfo.Wrapper>
    </ContactInfo>
  );
}
