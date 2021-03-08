import React from "react";
import { ContactForm } from "../../components";

export function FormContainer({ children }) {
  return (
    <ContactForm>
      <ContactForm.Div>
        <h2>Schedule an appointment</h2>
        <span>
          This is not an actual appointment until confirmed. The below form is
          to request an appontment,
          <br /> we will get back to you to confirm the requested date and time
          is available.
        </span>
        <ContactForm.Wrapper>
          <ContactForm.Form onSubmit="{sendEmail}">
            <ContactForm.Inner>
              <ContactForm.Item>
                {" "}
                <input
                  type="text"
                  name="contact_name"
                  placeholder="First Name"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
                <input
                  type="date"
                  name="user_date"
                  placeholder="Date"
                  required
                />
              </ContactForm.Item>
              <ContactForm.Item>
                {" "}
                <input
                  type="text"
                  name="contact_name"
                  placeholder="Last Name"
                  required
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="user_phone_number"
                  placeholder="Phone number"
                  required
                />
                <input type="time" name="user_time" required />
              </ContactForm.Item>
            </ContactForm.Inner>
            <ContactForm.Item>
              <textarea
                name="message"
                placeholder="Message / reason for appointment"
                required
              />
              <button type="submit">
                <span style={{ fontSize: "16px", color: "#fff" }}>
                  Send message
                </span>
              </button>
            </ContactForm.Item>
          </ContactForm.Form>
        </ContactForm.Wrapper>
      </ContactForm.Div>
    </ContactForm>
  );
}
