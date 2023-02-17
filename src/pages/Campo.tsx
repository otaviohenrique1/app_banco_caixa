import { ErrorMessage, Field } from "formik";
import { ReactNode } from "react";
import styled from "styled-components";

interface CampoProps {
  values: string;
  placeholder: string;
  type: 'date' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
  name: string;
  id: string;
  label: ReactNode;
}

export function Campo(props: CampoProps) {
  const { values, placeholder, type, name, id, label } = props;
  return (
    <CampoContainer>
      <label
        htmlFor={id}
      >{label}</label>
      <Field
        type={type}
        placeholder={placeholder}
        value={values}
        name={name}
        id={id} />
      <ErrorMessage
        name={name}
        component="span"
        className="error-message"
      />
    </CampoContainer>
  );
}

const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span.error-message {
    color: red;
  }
`;
