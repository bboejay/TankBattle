class Wall {
  constructor(x, y, width, height, type = 'brick') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type; // 'brick' or 'steel'
    this.destroyed = false;
  }

  draw(ctx) {
    if (this.destroyed) return;
    
    ctx.fillStyle = this.type === 'brick' ? '#8B4513' : '#708090';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  checkCollision(bullet) {
    if (this.destroyed) return false;
    
    return bullet.x > this.x &&
           bullet.x < this.x + this.width &&
           bullet.y > this.y &&
           bullet.y < this.y + this.height;
  }

  destroy() {
    if (this.type === 'brick') {
      this.destroyed = true;
    }
    // Steel walls cannot be destroyed
  }
}

export default Wall;