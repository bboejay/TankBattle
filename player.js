class PlayerTank {
  constructor() {
    this.x = 400;
    this.y = 500;
    this.width = 40;
    this.height = 40;
    this.speed = 2;
    this.color = 'green';
    this.direction = 'up';
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
    // Draw barrel based on direction
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    switch(this.direction) {
      case 'up':
        ctx.moveTo(this.x + this.width/2, this.y);
        ctx.lineTo(this x + this.width/2, this.y - 20);
        break;
      case 'down':
        ctx.moveTo(this.x + this.width/2, this.y + this.height);
        ctx.lineTo(this.x + this.width/2, this.y + this.height + 20);
        break;
      case 'left':
        ctx.moveTo(this.x, this.y + this.height/2);
        ctx.lineTo(this.x - 20, this.y + this.height/2);
        break;
      case 'right':
        ctx.moveTo(this.x + this.width, this.y + this.height/2);
        ctx.lineTo(this.x + this.width + 20, this.y + this.height/2);
        break;
    }
    ctx.stroke();
  }

  update(keys) {
    if (keys.ArrowUp) {
      this.y -= this.speed;
      this.direction = 'up';
    }
    if (keys.ArrowDown) {
      this.y += this.speed;
      this.direction = 'down';
    }
    if (keys.ArrowLeft) {
      this.x -= this.speed;
      this.direction = 'left';
    }
    if (keys.ArrowRight) {
      this.x += this.speed;
      this.direction = 'right';
    }
  }

  shoot() {
    let x = this.x + this.width/2;
    let y = this.y + this.height/2;
    
    switch(this.direction) {
      case 'up':
        y = this.y;
        break;
      case 'down':
        y = this.y + this.height;
        break;
      case 'left':
        x = this.x;
        break;
      case 'right':
        x = this.x + this.width;
        break;
    }
    
    return new Bullet(x, y, this.direction);
  }
}

export default PlayerTank;