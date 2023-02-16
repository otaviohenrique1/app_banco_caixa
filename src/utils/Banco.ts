export class Banco {
  private numero_conta: string;
  private nome_cliente: string;
  private numero_agencia: string;
  private saldo: number;

  constructor(
    numero_conta: string,
    nome_cliente: string,
    numero_agencia: string,
    saldo: number
  ) {
    this.numero_conta = numero_conta;
    this.nome_cliente = nome_cliente;
    this.numero_agencia = numero_agencia;
    this.saldo = saldo;
  }
  
  /**
   * getSaldo
   */
  public getSaldo() {
    return this.saldo;
  }
  
  /**
   * depositar
   */
  public depositar(valor: number) {
    this.saldo += valor;
  }
}