interface Colaborador {
  nome: string;
  cpf: string;
  endereco: string;
}
export class Empresa {
  public readonly nome: string;
  public readonly cnpj: string;
  private fundador: string;
  private colaboradores: Colaborador[] = [];
  constructor(nome: string, cnpj: string, fundador: string) {
    this.nome = nome;
    this.cnpj = cnpj;
    this.fundador = fundador;
  }

  addColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }
}

const empresa1 = new Empresa('Rocketseat', '11.111.111/0001-11', 'Marcos');
empresa1.addColaborador({
  nome: 'Marcos',
  cpf: '111.111.111-11',
  endereco: 'rua dos bobos, 0',
});
console.log(empresa1);
