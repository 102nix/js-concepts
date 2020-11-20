const Animal = function (options) {
  this.name = options.name
  this.color = options.color

  // this.voice = function () {
  //   console.log('This sound from: ', this.name)
  // }
}

Animal.prototype.voice = function () {
  console.log('This sound from: ', this.name)
}

const Cat = function (options) {
  Animal.apply(this, arguments)
  this.hasTail = options.hasTail
  this.type = 'cat'
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.prototype.voice = function () {
  console.log('This sound goes from Cat class: ', this.name)
}

const dog = new Animal({name: 'Rex', color: 'white'})
const cat = new Cat({name: 'Oksy', color: 'broun', hasTail: true})
console.log(dog)
console.log(cat)  