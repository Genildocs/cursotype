class Programmer {
  constructor(
    public name: string,
    public skills: string[],
    private age: number,
  ) {
    this.name;
    this.skills;
    this.age = 31;
  }

  idade = this.age;
}

const Genildo = new Programmer('Genildo', ['JS', 'Css'], 31);
console.log(Genildo.idade);
