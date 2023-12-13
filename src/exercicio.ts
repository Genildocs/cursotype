function circuitPower(voltage: number, current: number) {
  return voltage * current;
}

console.log(circuitPower(110, 3));
console.log(circuitPower(230, 10));
console.log(circuitPower(480, 20));

console.log('------------------');

function addUp(number: number): number {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}

console.log(addUp(4));
console.log(addUp(600));

console.log('------------------');

function calcularFatorial(numero: number): number {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

console.log(calcularFatorial(2));
