function nome(
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string } {
  return { firstName, lastName };
}

console.log(nome('Genildo', 'Souza'));
