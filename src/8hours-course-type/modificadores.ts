class Pessoa {
  public nome: string;

  constructor(nome: string, sex: string) {
    this.nome = nome;
  }
}

const pessoa5 = new Pessoa('João', 'Masc');
console.log(pessoa5);
