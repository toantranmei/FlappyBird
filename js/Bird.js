const Bird = function (x, y, ctx) {
	this.x = x;
	this.y = y;
	this.ctx = ctx;
	this.velY = 0;
	this.width = 90;
	this.height = 64;
	this.ticks = 0;
	this.spriteIndex = 0;
	this.sprites = [
		document.getElementById('bird1'),
		document.getElementById('bird2'),
		document.getElementById('bird3'),
	];

	var self = this;
	window.addEventListener('keydown', function(e) {
		console.log(this);
		if (e.keyCode === 32) {
			self.velY = -16;
		}
	});
};



Bird.prototype.update = function () {
	this.ticks++;
	if (this.ticks % 15 === 0) {
		this.spriteIndex = (this.spriteIndex+1) % this.sprites.length;
	}
	// gan toa do y cua con chim bang voi toa do ban dau cong vs toa do thay doi 
	this.y += this.velY;
	this.velY += 2;
}

Bird.prototype.render = function () {
	let renderX = this.x - this.width/2;
	let renderY = this.y - this.height/2;
	this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
}