import styled from "styled-components";
import { Formik, Form, Field, FormikHelpers } from "formik";
// import * as Yup from "yup";
import { object, string, number } from "yup";

const schemaValidacao = object().shape({
  cpf: string().required(),
  agencia: number().required(),
  senha: string().required(),
});

interface FormLoginTypes {
  cpf: string;
  agencia: number;
  senha: string;
}

const valoresIniciaisFormLogin: FormLoginTypes = {
  cpf: "",
  agencia: 0,
  senha: ""
};

export function Login() {
  function onSubmitForm(values: FormLoginTypes, formikHelpers: FormikHelpers<FormLoginTypes>) {
    // 
  }

  return (
    <Center>
      <Formik
        initialValues={valoresIniciaisFormLogin}
        onSubmit={onSubmitForm}
        validationSchema={schemaValidacao}
      ></Formik>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="cpf"
      />
      <input
        type="text"
        placeholder="agencia"
      />
      <input
        type="text"
        placeholder="senha"
      />
      <button
        type="button"
      >Entrar</button>
      <button
        type="button"
      >Limpar</button>
      <button
        type="button"
      >Novo usuario</button>
    </Center>
  );
}

const Center = styled.div`
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
