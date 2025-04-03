class EnemyTank {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.speed = 1;
    this.color = 'red';
    this.direction = 'down';
    this.shootCooldown = Math.random() * 2000 + 1000; // Random cooldown between 1-3 seconds
    this.lastShot = 0;
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
        ctx.lineTo(this.x + this.width/2, this.y - 20);
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

  update(player, deltaTime) {
    // Simple AI: move towards player
    if (player.x < this.x) {
      this.x -= this.speed;
      this.direction = 'left';
    }
    if (player.x > this.x) {
      this.x += this.speed;
      this.direction = 'right';
    }
    if (player.y < this.y) {
      this.y -= this.speed;
      this.direction = 'up';
    }
    if (player.y > this.y) {
      this.y += this.speed;
      this.direction = 'down';
    }

    // Handle shooting
    this.lastShot += deltaTime;
    if (this.lastShot >= this.shootCooldown) {
      this.lastShot = 0;
      return this.shoot();
    }
    return null;
  }

  shoot() {
    return new Bullet(
      this.x + this.width/2,
      this.y + this.height/2,
      this.direction
    );
  }
}

export default EnemyTank;