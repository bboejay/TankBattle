import PlayerTank from './player.js';

// Initialize game
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state
let lastTime = 0;
const game = {
  width: 800,
  height: 600,
  running: true
};

// Input handling
const keys = {};
window.addEventListener('keydown', e => keys[e.code] = true);
window.addEventListener('keyup', e => keys[e.code] = false);

// Create player
const player = new PlayerTank();

// Main game loop
function gameLoop(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  
  // Clear canvas
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, game.width, game.height);
  
  // Update and render game objects
  player.update(keys);
  player.draw(ctx);
  
  if (game.running) {
    requestAnimationFrame(gameLoop);
  }
}

// Start game
requestAnimationFrame(gameLoop);

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = game.width;
  canvas.height = game.height;
});

// Initialize canvas size
canvas.width = game.width;
canvas.height = game.height;