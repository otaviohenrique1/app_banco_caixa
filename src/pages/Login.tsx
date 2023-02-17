import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
// import * as Yup from "yup";
import { object, string } from "yup";
import { Campo } from "./Campo";

const schemaValidacao = object().shape({
  cpf: string().required("Campo CPF esta vazio."),
  agencia: string().required("Campo agencia esta vazio."),
  senha: string().required("Campo senha esta vazio."),
});

interface FormLoginTypes {
  cpf: string;
  agencia: string;
  senha: string;
}

const valoresIniciaisFormLogin: FormLoginTypes = {
  cpf: "",
  agencia: "",
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
      >
        {({ values }) => {
          return (
            <FormStyled>
              <h1>Login</h1>
              <Campo
                values={values.cpf}
                placeholder="Digite o CPF"
                type="password"
                name="cpf"
                id="cpf"
                label="CPF"
              />
              <Campo
                values={values.agencia}
                placeholder="Digite o agencia"
                type="password"
                name="agencia"
                id="agencia"
                label="Agencia"
              />
              <Campo
                values={values.senha}
                placeholder="Digite o senha"
                type="password"
                name="senha"
                id="senha"
                label="Senha"
              />
              <button
                type="submit"
              >Entrar</button>
              <button
                type="reset"
              >Limpar</button>
              <button
                type="button"
              >Novo usuario</button>
            </FormStyled>
          );
        }}
      </Formik>
    </Center>
  );
}

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Center = styled.div`
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
