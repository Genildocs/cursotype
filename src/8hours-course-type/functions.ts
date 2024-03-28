//type alias: Podemos criar um type alias especificando o tipo primitivo que queros usar e utiliza-lo em varias partes do codigo.
type stringOrNumber = string | number;
const pessoa1: stringOrNumber = 2023;

// const pessoa2:  string  = 'Marcos';
// console.log(pessoa2)

//
interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  estadoCivil?: string;
  anoDeNascimento?: number;
}

const estudante: Pessoa = {
  nome: 'Genildo',
  idade: 31,
  sexo: 'Masculino',
  estadoCivil: 'Solteiro',

};

//functions

const sumCalc = (a: number, b: number): string =>{
   const sum = a + b;
   return `o valor de sum é: ${sum}.`
}

console.log(sumCalc(25,6))

// type str = (msg: number) => void;
type str = (msg: string) => void;
const logMsg: str = (message) =>{
  console.log(message)
}

logMsg('Function sem retorno.')
logMsg(sumCalc(5,6))

//type alias
type mathFunction = (x: number, y: number) => number;

const multiply: mathFunction = (a, b) =>{
  return a * b;
}

console.log(multiply(25,5))

//Optional parametros
//Quando um argumento é colocado como opcional o typescrit reclama, pois pode receber um undefined, nesse caso
//precisamos resolver isso usando uma condição.

const addAll = (a: number, b:number, c?:number): number =>{
  if(typeof c !== "undefined"){
    return a + b + c
  }
  return a + b
}

console.log(addAll(5,6,15))

