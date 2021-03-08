import React from "react";
import { Form } from "../../components";

export function FormContainer({ children }) {
  return (
    <Form>
      <Form.Wrapper>
        <h2>Form Section</h2>
      </Form.Wrapper>
    </Form>
  );
}
