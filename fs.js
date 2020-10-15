let fontSize = 16;
const updateFontSize = () => {
  localStorage.setItem('font-size', fontSize);
  document.body.style.fontSize = fontSize + 'px';
  document.querySelector('span').textContent = fontSize;
}
if (localStorage.getItem('font-size')) {
  fontSize = localStorage.getItem('font-size')
}

updateFontSize()

document.querySelector('.plus').addEventListener('click', function() {
  fontSize++;
  updateFontSize()
})
document.querySelector('.minus').onclick = () => {
  fontSize--;
  updateFontSize()
}
// document.querySelector('.minus').addEventListener('click', function() {
//   fontSize--;
//   updateFontSize()
// })