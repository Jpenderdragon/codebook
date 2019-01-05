let pl, keys, plats, coins, over, bad



function preload() {
  this.load.image('bg',  './assets/background.jpg')
  this.load.image('bad',  './assets/Slime.png')
  this.load.image('pf',  './assets/platform.png')
  this.load.image('coin',  './assets/Coin.png')
  this.load.image('over',  './assets/gameover.png')
  this.load.spritesheet('hero','./assets/hero.png',
   {frameWidth: 14, frameHeight: 19}
  )

}


function create()  {
  this.add.image(0,0, 'bg').setOrigin(0,0)
  pl = this.physics.add.sprite(100,100, 'hero')
  pl.setCollideWorldBounds(true)
  //player.setBounce(1) // between 0 and 1
  
  pl.setScale(3)
  pl.setGravityY(1200)
  
  bad = this.physics.add.sprite(430,100, 'bad')
  bad.setCollideWorldBounds(true)
  bad.setScale(3)
  bad.setBounce(1)
  bad.setVelocity(200)

  
  plats = this.physics.add.staticGroup()
  plats.create(300,300, 'pf').setScale(5,4).refreshBody()
  plats.create(400,240, 'pf').setScale(5,4).refreshBody()
  plats.create(200,350, 'pf').setScale(5,4).refreshBody()
  plats.create(450,300, 'pf').setScale(5,4).refreshBody()
  plats.create(500,350, 'pf').setScale(5,4).refreshBody()
  
  coins = this.physics.add.staticGroup()
  coins.create(300,260, 'coin').setScale(3,3)
  coins.create(380,200, 'coin').setScale(3,3)
  coins.create(110,23, 'coin')
 
  scoreText = this.add.text(16,16, 'Score: 0')
  let score = 0

  function collectCoin(pl,coin) {
   score += 1
    scoreText.setText(`Score: ${score}`)
    coin.destroy()
  }
   

  

 
  function hitbad(pl,bad) {
    bad.destroy()
    this.add.image(221,72, 'over').setOrigin(0,0).setScale(9,9)
    over = true
  }
 
  this.physics.add.collider(pl,plats)
  this.physics.add.collider(bad,plats)
  this.physics.add.collider(pl,coins, collectCoin)
  this.physics.add.collider(pl,  bad, hitbad, null, this)
  
  
 
  

  
  
  
  
  
  keys = this.input.keyboard.createCursorKeys()
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
    if (over && keys.space.isDown) {
     over = false
     this.create()
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
  physics: { default: 'arcade'},
  
}

new Phaser.Game(config)
