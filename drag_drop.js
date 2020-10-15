// const zone1 = document.querySelector('.zone-1')
// const zone2 = document.querySelector('.zone-2')
// const shoes = document.querySelector('#shoes')

// const allowDrop = (e) => {
//   e.preventDefault()
// }

// zone1.ondragover = allowDrop
// zone2.ondragover = allowDrop

// const drag = (e) => {
//   e.dataTransfer.setData('id', e.target.id)
// }

// shoes.ondragstart = drag

// const drop = (e) => {
//   let itemID = e.dataTransfer.getData('id')
//   e.target.append(document.getElementById(itemID))
// }

// zone1.ondrop = drop
// zone2.ondrop = drop

//// second part

// const allowDrop = (e) => e.preventDefault()

// const dragAndSetMarkerEl = (e) => {
//   e.dataTransfer.setData('el', e.target.className)
// }

// const dropAndAppend = (e) => {
//   const getMarkerEl = e.dataTransfer.getData('el')
//   e.target.append(document.querySelector(`.${getMarkerEl}`))
// }

// document.ondragover = allowDrop
// document.ondrop = dropAndAppend
// const prgf = document.querySelector('.some-text')

// prgf.ondragstart = dragAndSetMarkerEl

const allowDrop = (e) => e.preventDefault()

const dropAndAppend = (e) => {
  const el = e.dataTransfer.getData('el')
  e.target.append(document.querySelector(`.${el}`))
}

const moveEl = (e) => {
  e.dataTransfer.setData('el', e.target.className)
}

document.ondragover = allowDrop
document.ondrop = dropAndAppend

const el = document.querySelector('.some-text')

el.ondragstart = moveEl