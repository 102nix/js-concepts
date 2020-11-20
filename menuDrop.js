function myFunction () {
  document.getElementById("myDropdown").classList.toggle('show')
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const divMenu = document.querySelector('.dropdown-content')
    if (divMenu.classList.contains('show')) {
      divMenu.classList.remove('show')
    }
  }
}