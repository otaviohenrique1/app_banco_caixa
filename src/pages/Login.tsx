import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
// import * as Yup from "yup";
import { object, string } from "yup";
import { Campo } from "../components/Campo";
import { Botao } from "../components/Botao";

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
                type="text"
                name="cpf"
                id="cpf"
                label="CPF"
              />
              <Campo
                values={values.agencia}
                placeholder="Digite o agencia"
                type="text"
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
              <Botao
                corBotaoType="azul"
                type="submit"
              >Entrar</Botao>
              <Botao
                corBotaoType="vermelho"
                type="reset"
              >Limpar</Botao>
              <Botao
                corBotaoType="verde"
                type="button"
              >Novo usuario</Botao>
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
