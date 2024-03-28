class Pessoa {
  private _nome: string;
  constructor(nome: string) {
    this._nome = nome;
  }

  get name(): string {
    return this._nome.toUpperCase();
  }
}

const pessoa3 = new Pessoa('Genildo');
console.log(pessoa3.name);
