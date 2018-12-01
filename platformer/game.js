let pl, keys



function preload() {
  this.load.image('bg',  './assets/background.jpg')
  this.load.spritesheet('hero','./assets/hero.png',
   {frameWidth: 14, frameHeight: 19}
  )

}


function create()  {
  this.add.image(0,0, 'bg').setOrigin(0,0)
  pl = this.physics.add.sprite(100,100, 'hero')
  pl.setCollideWorldBounds(true)
  //player.setBounce(1) // between 0 and 1
  keys = this.input.keyboard.createCursorKeys()
  pl.setScale(3)

 
}


function update()  {

 if (keys.left.isDown) {

  pl.setVelocityX(-400)
  
 }
else if (keys.right.isDown) {

 pl.setVelocityX(400)

}

if (pl.body.onFloor()) {
  
  pl.setDragX(1500)
  if (keys.up.isDown) {
   pl.setVelocityY(-400)
  }
}

}

//-----------------------------------------------
// Configuration

let config = {
  width: 683,
  height: 384,
  pixelArt: true,
  scene: { 
    preload: preload,
    create: create,
    update: update, 
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1200, },
      debug: true
    }
  },
}

new Phaser.Game(config)