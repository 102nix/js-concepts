function calcValues (a, b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b
  ]
}

const [sum, sub = 'Вычисления нет', ...other] = calcValues(42, 10)
console.log(sum, sub, other)

const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow'
  }
}

const {name, address: {country, city}, car = 'Машины нет'} = person // name = person.name
console.log(name, country, city, car)

