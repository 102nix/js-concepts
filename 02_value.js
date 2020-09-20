let a = [1, 2, 3]
let b = a
b.push(4)
console.log(a)
console.log(b)

let aa = ['a', 'b', 'c']
let bb = aa.concat()
bb.push('e')
console.log(aa)
console.log(bb)

let cc = ['a', 'b', 'c']
console.log(aa === cc)