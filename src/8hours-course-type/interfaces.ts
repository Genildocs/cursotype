interface Veiculo{
  name: string
  motor: string
}

interface Carro extends Veiculo{
  acelar(): void
}

const carro: Carro ={
  name: 'Camaro',
  motor: 'V8',
  acelar() {
    console.log('Vrumm')
  }
}

carro.acelar()

interface Moto extends Veiculo{
  buzinar(): void
}

const moto: Moto = {
  name: 'Fazer',
  motor: '121cl',
  buzinar() {
    console.log('bip bip')
  }
}

moto.buzinar()
