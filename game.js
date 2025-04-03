console.log('Initializing game...');

import PlayerTank from './player.js';
import Bullet from './bullet.js';
import Wall from './wall.js';
import EnemyTank from './enemy.js';

// Initialize game
const canvas = document.getElementById('gameCanvas');
if (!canvas) {
  console.error('Canvas element not found!');
}
const ctx = canvas.getContext('2d');
if (!ctx) {
  console.error('Could not get 2D context!');
}

// Game state
let lastTime = 0;
const game = {
  width: 800,
  height: 600,
  running: true
};

// Game objects
const player = new PlayerTank();
const enemies = [
  new EnemyTank(100, 100),
  new EnemyTank(600, 100),
  new EnemyTank(300, 300)
];
const walls = [
  new Wall(200, 200, 80, 80),
  new Wall(400, 400, 80, 80, 'steel'),
  new Wall(100, 500, 80, 40),
  new Wall(600, 300, 40, 80)
];

// Input handling
const keys = {};
let bullets = [];
let canShoot = true;

window.addEventListener('keydown', e => {
  keys[e.code] = true;
  
  // Handle shooting
  if (e.code === 'Space' && canShoot) {
    bullets.push(player.shoot());
    canShoot = false;
    setTimeout(() => canShoot = true, 200); // Shooting cooldown
  }
});

window.addEventListener('keyup', e => keys[e.code] = false);

// Collision detection
function checkCollisions() {
  // Check bullet collisions with walls
  bullets.forEach(bullet => {
    walls.forEach(wall => {
      if (wall.checkCollision(bullet)) {
        bullet.active = false;
  


window.addEventListener('resize', () => {
  canvas.width = game.width;
  canvas.height = game.height;
});

// Initialize canvas size
canvas.width = game.width;
canvas.height = game.height;