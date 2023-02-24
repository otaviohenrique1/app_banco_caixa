import { ErrorMessage, Field } from "formik";
import { ReactNode } from "react";
import styled from "styled-components";

interface CampoProps {
  values: string;
  name: string;
  id: string;
  label: ReactNode;
}

interface CampoInputProps extends CampoProps {
  placeholder: string;
  type: 'date' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
}

export function CampoInput(props: CampoInputProps) {
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

interface DataListaTypes {
  label: string;
  valor: string;
}

interface CampoSelectProps extends CampoProps {
  data: DataListaTypes[];
}

export function CampoSelect(props: CampoSelectProps) {
  const { values, name, id, label, data } = props;

  return (
    <CampoContainer>
      <label
        htmlFor={id}
      >{label}</label>
      <FieldStyled
        name={name}
        id={id}
        component="select"
        value={values}
      >
        <option>Selecione</option>
        {data.map((item, index) => {
          const { label, valor } = item;
          return (
            <option
              value={valor}
              key={index}
            >{label}</option>
          );
        })}
      </FieldStyled>
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
