const nomes: string[] = ['Carlos', 'Pedro', 'João'];
nomes.push('23');
console.log(nomes);

const arrOfnumbers: Array<number> = [23, 50, 60, 80, 500];

const sum = arrOfnumbers.reduce((acc, curr) => {
  return acc + curr;
});
console.log(`Sum is: ${sum}`);
