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
      <FieldStyled
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

const FieldStyled = styled(Field)`
  padding: 10px 15px;
  font-size: 15px;
`;

const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span.error-message {
    color: red;
    font-size: 15px;
  }
`;
