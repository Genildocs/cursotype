# TypeScript

Resumo dos prinicipais tópicos.

## Documentação

- Metodos set e get
  Em TypeScript, os métodos `get` e `set` são usados para definir getters e setters em uma classe, respectivamente. Eles permitem controlar o acesso e a modificação de propriedades de um objeto, permitindo a execução de lógica personalizada ao acessar ou modificar essas propriedades. Aqui está um exemplo simples de como usar `get` e `set` em TypeScript:

```typescript
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // Getter para obter o raio
  get radius(): number {
    return this._radius;
  }

  // Setter para definir o raio, com validação
  set radius(value: number) {
    if (value < 0) {
      throw new Error('O raio não pode ser negativo.');
    }
    this._radius = value;
  }

  // Getter para obter a área do círculo
  get area(): number {
    return Math.PI * this._radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // Saída: 5
console.log(circle.area); // Saída: ~78.54

circle.radius = 10; // Definindo um novo raio
console.log(circle.radius); // Saída: 10
console.log(circle.area); // Saída: ~314.16

circle.radius = -5; // Tentando definir um raio negativo (vai lançar um erro)
```

Neste exemplo, a classe `Circle` possui uma propriedade `_radius` que é controlada pelos métodos `get radius()` e `set radius(value)`. O getter retorna o valor do raio, enquanto o setter permite definir o raio, mas também valida se o valor é negativo antes de atribuí-lo à propriedade `_radius`. Além disso, há um getter adicional para calcular a área do círculo com base no raio.
