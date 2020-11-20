function sayHelloTo (name) {
  const message = 'Hello ' + name

  return function () {
    console.log(message)
  }
}

const helloToEllena = sayHelloTo('Elena')
const helloToIgor = sayHelloTo('Igor')
console.log(helloToEllena())
