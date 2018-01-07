window.onload = function () {
  // khoi tao canvas
  const c = document.getElementById('canvas');

  // thiet lap thong so cho canvas
  c.width = window.innerWidth;
  c.height = 600;

  // Import thu vien Context su dung ve do hoa tren canvas
  const ctx = c.getContext('2d');





  // Khoi tao doi tuong 
  const enviroment = new Enviroment(c, ctx);
  const bird = new Bird(250, 250, ctx);
  gameLoop();


  ctx.fillStyle = '#ffffff';
  function gameLoop() {
    ctx.fillRect(0, 0, c.width, c.height);
    enviroment.update();
    enviroment.render();
    bird.update();
    bird.render()
    window.requestAnimationFrame(gameLoop);
  }



};



