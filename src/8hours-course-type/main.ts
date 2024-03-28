const soma = (a: number, b: number): number => {
  return a + b;
};

console.log(soma(18, 33));

//Union type
let postId: string | number;
//Aceita varios tipo numa mesma varivel, bom para quando voce nao saber quais dados provem do servidor.
postId = 'Genildo';
console.log(postId);
postId = 31;
console.log(postId);

//

let arrayAnimes = ['Naruto', 'Bleach', 'One Piece'];
let arrayPersonAnimes = ['Pain', 'Aizen', 120];
let arrayData = [2008, 'Bissexto', true];

// arrayAnimes[0] = 23 // inferencia de tipo no array, por isso não aceita o tipo number. Podemos alterar especificando o array como any ou uknow
// arrayPersonAnimes[0] = true
arrayData[1] = false;
console.log(arrayData);

//

interface animeAtual {
  //especificamos o objeto animeAtual
  name: string;
  active?: boolean; // aqui estamos dizendo que essa propriedade é opcional
  year: number;
}

const anime1: animeAtual = {
  name: 'Solo Leving',
  active: true,
  year: 2024,
};

const greeAnime = (animes: animeAtual) => {
  return `O Anime: ${animes.name} é muito bom! Seu ano é: ${animes.year}`;
};
//Criado uma função que recebe como argumento um objeto com as especificações da interface animeAtual
console.log(greeAnime(anime1));

