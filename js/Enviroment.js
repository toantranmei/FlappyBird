
 // Tao ra moi truong trong game
  const Enviroment = function (c, ctx) {
    this.c = c;
    this.ctx = ctx;
    this.bgPos = 0;
    this.fgPos = 0;
    this.bgSpeed = 4;
    this.bgWidth = 450;
    this.bgImg = document.getElementById('bg');
  }

  Enviroment.prototype.update = function () {
    // Tao vong lap tuan hoan cho background
    this.bgPos -= this.bgSpeed;
    if (this.bgPos < -this.bgWidth) 
      this.bgPos = 0;
  }

  Enviroment.prototype.render = function (ctx) {
    for( let i = 0; i <= this.c.width/this.bgWidth+1; i++) {
      // tinh so luong 1 hang co bao nhieu anh = tong chieu rong chia cho chieu rong cua anh ra so luong
      // ve ra anh voi do rong bang voi chiu rong cua canvas
      this.ctx.drawImage(this.bgImg, this.bgPos+i*this.bgWidth, 0);
    }
    
  }