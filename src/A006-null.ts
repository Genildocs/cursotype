function nome(
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string } {
  return { firstName, lastName };
}

console.log(nome('Genildo', 'Souza'));

class Cats {
  numberss : number[]   = []
  name: string;
  age: number;
  sexo: string;
  calc():number {
    return 2025 - 1992
} //Metodos não precisamos inicializar no constructor.

  constructor(name: string, age: number, numberss : number[], sexo: string) {
    this.name = name;
    this.age = age;
    this.numberss = numberss
    this.sexo = sexo
  }
}

const bolinha = new Cats('Bolinha', 17, [2,5], 'M')
console.log(bolinha.name)
const chumbinho: Cats = new Cats('Chumbo', 20, [3,5], 'F')
console.log(chumbinho.calc())
