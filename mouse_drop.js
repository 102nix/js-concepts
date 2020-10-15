const ball = document.getElementById('ball')

ball.onmousedown = function(e) {

  ball.ondragstart = () => false

  const moveAt = (e) => {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px'
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px'
  }

  ball.style.position = 'absolute'
  ball.style.zIndex = 1000

  moveAt(e)

  document.body.appendChild(ball)
  document.onmousemove = (e) => moveAt (e)


  // function moveAt (e) {
  //   ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px'
  //   ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px'
  // }

  // document.onmousemove = function (e) {
  //   moveAt (e)
  // }

  ball.onmouseup = () => {
    document.onmousemove = null
    ball.onmouseup = null
  }
}