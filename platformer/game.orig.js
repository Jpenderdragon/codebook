let player

new Phaser.Game({
  width: 683, // 1366,
  height: 384, // 768
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300, x: 100},
      debug: true
    }
  },
  scene: {
    preload() {
     this.load.image('bg',  './assets/background.jpg')
     this.load.image('hero','./assets/hero.png')
    },
    create() {
      this.add.image(0,0, 'bg').setOrigin(0,0)
      player = this.physics.add.sprite(100,100, 'hero')
      player.setCollideWorldBounds(true)
      player.setBounce(1) // between 0 and 1
    }
  }
})
