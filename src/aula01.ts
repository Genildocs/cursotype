const idade = 31;
if (idade > 18) {
  console.log('É maior de idade');
} else {
  console.log('É menor de idade');
}

const arrayOfNumber: Array<number | string> = [1, 2, 3, 4, '5'];
console.log(arrayOfNumber);
const fruits: string[] = ['Uva', 'Banana', 'Abacaxi'];
console.log(fruits);
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Rafael',
  idade: 31,
  adulto: true,
};
console.log(pessoa.idade, pessoa.nome);

//Function

const soma: (x: number, y: number) => number = (x, y) => x + y;
console.log(soma(2, 2));

//void
function sayHello(): void {
  console.log('Hello');
}

sayHello();

const person = {
  nome: 'Genildo',
  idade: 31,

  exibirNome(): void {
    console.log(this.nome);
  },
};

person.exibirNome();
console.log(person.idade);

//object
