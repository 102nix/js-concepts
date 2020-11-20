const ball = document.getElementById('ball');

ball.onmousedown = function(e) {

  ball.ondragstart = () => false;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  document.body.appendChild(ball);

  const moveAt = (e) => {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
  }

  moveAt(e)

  document.onmousemove = (e) => moveAt (e);

  ball.onmouseup = () => {
    document.onmousemove = null
    ball.onmouseup = null
  }
}