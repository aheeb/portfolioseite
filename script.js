document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    const points = [
      document.getElementById('point1'),
      document.getElementById('point2'),
      // Add more points here
    ];
    let currentPointIndex = 0;
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let snake = [{x: 10, y: 10}];
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      let target = points[currentPointIndex].getBoundingClientRect();
      let head = snake[0];
  
      let dx = target.left - head.x;
      let dy = target.top - head.y;
  
      let distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < 1) {
        currentPointIndex = (currentPointIndex + 1) % points.length;
      } else {
        dx /= distance;
        dy /= distance;
        head.x += dx;
        head.y += dy;
      }
  
      ctx.fillStyle = 'green';
      ctx.fillRect(head.x, head.y, 20, 20);
  
      requestAnimationFrame(draw);
    }
  
    draw();
  });
  