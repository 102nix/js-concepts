// let someArr = [
//   {code: 102, city: 'Ufa'},
//   {code: 174, city: 'Chel'},
//   {code: 163, city: 'Samara'}
// ]

// let codeFromsomeArr = someArr.reduce((accum, item) =>{
//   accum.push(item.code)
//   return accum
// }, [])

// console.log(codeFromsomeArr)

// isArray()
// console.log(Array.isArray(codeFromsomeArr))

// Сумма чисел массива: // Обратить внимание на необязательный элемент после }

let a = [1, 3, 5, 7, 9]

let b = a.reduce((accum, item) => {
  accum = accum + item
  return accum
})

console.log(b)