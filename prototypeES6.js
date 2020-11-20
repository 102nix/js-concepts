class Animal {
  constructor (options) {
    this.name = options.name
    this.color = options.color
  }

  voice () {
    console.log('Base voice from: ', this.name)
  }
}

class Cat extends Animal {
  constructor (options) {
    super(options)
    this.hasTail = options.hasTail
    this.type = 'cat'
  }
  voice () {
    super.voice()
    console.log('Voice from Cat class: ', this.name)
  }
}

const dog = new Animal({name: 'Rex', color: 'white'})
const cat = new Cat({name: 'Oksy', color:'bengalColor', hasTail: true})

console.log(dog)
console.log(cat)