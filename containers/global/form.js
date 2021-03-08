import React from "react";
import { ContactForm } from "../../components";

export function FormContainer({ children }) {
  return (
    <ContactForm>
      <ContactForm.Wrapper>
        <ContactForm.Item>
          <h2>Schedule an appointment</h2>
          <span>
            This is not an actual appointment until confirmed. <br />
            The below form is to request an appontment, we will get back to you
            to confirm the requested date and time is available.
          </span>
          <form onSubmit="{sendEmail}">
            <input
              type="text"
              name="contact_name"
              placeholder="Full Name"
              autoComplete="off"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />

            <input
              type="text"
              name="user_contact_number"
              placeholder="Your contact number"
              autoComplete="off"
              required
            />

            <input type="date" name="user_date" placeholder="Date" required />

            <input type="time" name="user_time" required />

            <textarea
              name="message"
              placeholder="Message / reason for appointment"
              required
            />
          </form>
        </ContactForm.Item>

        <ContactForm.Image
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1596944887702-d0a38db968c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></ContactForm.Image>
      </ContactForm.Wrapper>
    </ContactForm>
  );
}
