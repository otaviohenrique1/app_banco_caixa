import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
import { object, string } from "yup";
import { Campo } from "../components/Campo";
import { Botao } from "../components/Botao";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClienteContext } from "../context/cliente";
import { v4 } from "uuid";

const schemaValidacao = object().shape({
  nome: string()
    .required("Campo nome esta vazio."),
  email: string()
    .email("Email invalido")
    .required("Campo email esta vazio."),
  cpf: string()
    .required("Campo CPF esta vazio."),
  senha: string()
    .min(8, "Minimo de 8 caracteres.")
    .max(32, "Maximo de 32 caracteres.")
    .required("Campo senha esta vazio."),
});

interface FormNovoUsuarioTypes {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  conta: string;
  telefone: string;
}

const valoresIniciaisFormNovoUsuario: FormNovoUsuarioTypes = {
  nome: "",
  email: "",
  cpf: "",
  senha: "",
  conta: "",
  telefone: "",
};

export function NovoUsuario() {
  const navigate = useNavigate();
  const { adicionarCliente } = useContext(ClienteContext);

  function onSubmitForm(values: FormNovoUsuarioTypes, formikHelpers: FormikHelpers<FormNovoUsuarioTypes>) {
    adicionarCliente({
      codigo: v4(),
      conta: parseInt(values.conta),
      nome: values.nome,
      cpf: parseInt(values.cpf),
      email: values.email,
      senha: values.senha,
      telefone: parseInt(values.telefone),
      agencia: "1111",
      saldo: 0,
    });
  }

  return (
    <Center>
      <Formik
        initialValues={valoresIniciaisFormNovoUsuario}
        onSubmit={onSubmitForm}
        validationSchema={schemaValidacao}
      >
        {({ values }) => {
          return (
            <FormStyled>
              <h1>Novo Usuário</h1>
              <Campo
                values={values.nome}
                placeholder="Digite o nome"
                type="text"
                name="nome"
                id="nome"
                label="Nome"
              />
              <Campo
                values={values.cpf}
                placeholder="Digite o CPF"
                type="text"
                name="cpf"
                id="cpf"
                label="CPF"
              />
              <Campo
                values={values.email}
                placeholder="Digite o email"
                type="email"
                name="email"
                id="email"
                label="Email"
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
                >Salvar</Botao>
                <Botao
                  corBotaoType="vermelho"
                  type="reset"
                >Limpar</Botao>
                <Botao
                  corBotaoType="verde"
                  type="button"
                  onClick={() => navigate("/")}
                >Voltar</Botao>
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
