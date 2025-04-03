class Bullet {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.size = 5;
    this.direction = direction;
    this.active = true;
  }

  update() {
    switch(this.direction) {
      case 'up':
        this.y -= this.speed;
        break;
      case 'down':
        this.y += this.speed;
        break;
      case 'left':
        this.x -= this.speed;
        break;
      case 'right':
        this.x += this.speed;
        break;
    }
    
    // Deactivate if out of bounds
    if (this.x < 0 || this.x > 800 || 
        this.y < 0 || this.y > 600) {
      this.active = false;
    }
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default Bullet;