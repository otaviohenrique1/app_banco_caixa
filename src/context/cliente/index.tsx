import { Dispatch, FC, SetStateAction, createContext, ReactNode, useState } from "react";

export interface Cliente {
  codigo: string;
  conta: number;
  nome: string;
  cpf: number;
  email: string;
  senha: string;
  telefone: number;
  agencia: string;
  saldo: number;
}

export type ClienteType = Cliente[];

export type PropsClienteContext = {
  state: ClienteType;
  setState: Dispatch<SetStateAction<ClienteType>>;
  adicionarCliente: (cliente: Cliente) => void;
  atualizarCliente: (cliente: Cliente, conta: number) => void;
  adicionarSaldo: (conta: number, valor: number) => void;
  removerSaldo: (conta: number, valor: number) => void;
  transferirSaldo: (contaCliente1: number, valor: number, contaCliente2: number) => void;
}

export const ValoresIniciais: PropsClienteContext = {
  state: [],
  setState: () => { },
  adicionarCliente: () => { },
  atualizarCliente: () => { },
  adicionarSaldo: () => { },
  removerSaldo: () => { },
  transferirSaldo: () => { },
};

export const CompraContext = createContext<PropsClienteContext>(ValoresIniciais);

export interface CompraContextProviderProps {
  children: ReactNode;
}

export const CompraContextProvider: FC<CompraContextProviderProps> = (props: CompraContextProviderProps) => {
  const [state, setState] = useState(ValoresIniciais.state);

  function adicionarCliente(cliente: Cliente) {
    setState([...state, {
      codigo: cliente.codigo,
      conta: cliente.conta,
      nome: cliente.nome,
      cpf: cliente.cpf,
      email: cliente.email,
      senha: cliente.senha,
      telefone: cliente.telefone,
      agencia: cliente.agencia,
      saldo: cliente.saldo,
    }]);
  }

  function atualizarCliente(produto: Cliente, conta: number) {
    let itemAtualizado = state.map((itemBusca) => {
      if (itemBusca.conta === conta) {
        itemBusca.codigo = produto.codigo;
        itemBusca.conta = produto.conta;
        itemBusca.nome = produto.nome;
        itemBusca.cpf = produto.cpf;
        itemBusca.email = produto.email;
        itemBusca.senha = produto.senha;
        itemBusca.telefone = produto.telefone;
        itemBusca.agencia = produto.agencia;
        itemBusca.saldo = produto.saldo;
      }
      return itemBusca;
    });
    setState(itemAtualizado);
  }

  function adicionarSaldo(conta: number, valor: number) {
    let itemAtualizado = state.map((itemBusca) => {
      if (itemBusca.conta === conta) {
        itemBusca.saldo = itemBusca.saldo + valor;
      }
      return itemBusca;
    });
    setState(itemAtualizado);
  }
  
  function removerSaldo(conta: number, valor: number) {
    let itemAtualizado = state.map((itemBusca) => {
      if (itemBusca.conta === conta) {
        itemBusca.saldo = itemBusca.saldo - valor;
      }
      return itemBusca;
    });
    setState(itemAtualizado);
  }
  
  function transferirSaldo(contaCliente1: number, valor: number, contaCliente2: number) {
    let itemAtualizado = state.map((itemBusca) => {
      if (itemBusca.conta === contaCliente1) {
        itemBusca.saldo = itemBusca.saldo - valor;
      }
      if (itemBusca.conta === contaCliente2) {
        itemBusca.saldo = itemBusca.saldo + valor;
      }
      return itemBusca;
    });
    setState(itemAtualizado);
  }

  return (
    <CompraContext.Provider
      value={{
        state,
        setState,
        adicionarCliente,
        atualizarCliente,
        adicionarSaldo,
        removerSaldo,
        transferirSaldo
      }}
    >
      {props.children}
    </CompraContext.Provider>
  );
};
