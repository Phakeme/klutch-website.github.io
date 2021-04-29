import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ContactForm, Divider } from "../../components";
import { ContactInfoContainer } from "./contactInfo";

const phoneRegExp = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

export function FormContainer() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      appointmentDate: "",
      appointmentTime: "",
      message: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string()
        .min(10, "Must have 10 digits atleast")
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      message: Yup.string()
        .min(10, "Must be atleast 10 characters or more")
        .required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values, "values");
    },
  });

  return (
    <Divider>
      <ContactForm onSubmit={formik.handleSubmit}>
        <ContactForm.Div>
          <h2>Schedule an appointment</h2>
          <span>
            This is not an actual appointment until confirmed. The below form is
            to request an appontment, we will get back to you to confirm
            the requested date and time is available.
          </span>
          <ContactForm.Wrapper>
            <ContactForm.Form>
              <ContactForm.Inner>
                <ContactForm.Item>
                  <ContactForm.InputArea>
                    <ContactForm.InputField>
                      {" "}
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      // autoComplete="off"
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <ContactForm.Error>
                          {formik.errors.firstName}
                        </ContactForm.Error>
                      ) : null}
                    </ContactForm.InputField>
                    <ContactForm.InputField>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        placeholder="Last Name"
                      // autoComplete="off"
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <ContactForm.Error>
                          {formik.errors.lastName}
                        </ContactForm.Error>
                      ) : null}
                    </ContactForm.InputField>
                    <ContactForm.InputField>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Email"
                      // required
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <ContactForm.Error>
                          {formik.errors.email}
                        </ContactForm.Error>
                      ) : null}
                    </ContactForm.InputField>
                    <ContactForm.InputField>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        placeholder="Phone number"
                      // required
                      />
                      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <ContactForm.Error>
                          {formik.errors.phoneNumber}
                        </ContactForm.Error>
                      ) : null}
                    </ContactForm.InputField>
                    <ContactForm.InputField>
                      <input
                        id="appointmentDate"
                        name="appointmentDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.appointmentDate}
                      // required
                      />
                    </ContactForm.InputField>
                    <ContactForm.InputField>
                      <input
                        type="time"
                        id="appointmentTime"
                        name="appointmentTime"
                        onChange={formik.handleChange}
                        value={formik.values.appointmentTime}
                      />
                    </ContactForm.InputField>
                  </ContactForm.InputArea>
                </ContactForm.Item>
              </ContactForm.Inner>
              <ContactForm.Item>
                <ContactForm.Textarea>
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    placeholder="Message / reason for appointment"
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <ContactForm.Error>
                      {formik.errors.message}
                    </ContactForm.Error>
                  ) : null}
                </ContactForm.Textarea>
                <button type="submit">
                  <span style={{ fontSize: "16px", color: "#fff" }}>
                    Send message
                  </span>
                </button>
              </ContactForm.Item>
            </ContactForm.Form>
            <ContactInfoContainer />
          </ContactForm.Wrapper>
        </ContactForm.Div>
      </ContactForm>
    </Divider>
  );
}
