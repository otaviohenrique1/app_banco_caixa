import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
// import * as Yup from "yup";
import { object, string } from "yup";
import { Campo } from "../components/Campo";
import { Botao } from "../components/Botao";
import { useNavigate } from "react-router-dom";

const schemaValidacao = object().shape({
  cpf: string()
    .required("Campo CPF esta vazio."),
  agencia: string()
    .required("Campo agencia esta vazio."),
  senha: string()
    .required("Campo senha esta vazio."),
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
  const navigate = useNavigate();

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
              <BotaoContainer>
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
                  onClick={() => navigate("/novo_usuario")}
                >Novo usuario</Botao>
              </BotaoContainer>
            </FormStyled>
          );
        }}
      </Formik>
    </Center>
  );
}

const BotaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

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
