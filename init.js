var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var newmeteo = false; 
var score = 0;
var speed = 200;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('space', 'assets/space.png');
    this.load.image('meteo1', 'assets/meteo1.png');
    this.load.image('meteo2', 'assets/meteo2.png');
    this.load.image('meteo3', 'assets/meteo3.png');
    this.load.image('meteo4', 'assets/meteo4.png');
    this.load.image('ship',
        'assets/ship.png',
        {frameWidth: 20, frameHeigth: 25}
        );

}

function create ()
{
    this.add.image(400, 300, 'space');
    meteo1 = this.physics   .add.sprite(50, 0, 'meteo1');
    meteo2 = this.physics.add.sprite(300, 0, 'meteo2');
    meteo3 = this.physics.add.sprite(200, -100, 'meteo3');
     meteo4 = this.physics.add.sprite(100, -40, 'meteo4');


    player = this.physics.add.sprite(200, 500, 'ship');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();  

    this.physics.add.collider(player, meteo1, hitmeteo, null, this);

    this.physics.add.collider(player, meteo2, hitmeteo, null, this);

    this.physics.add.collider(player, meteo3, hitmeteo, null, this);

    this.physics.add.collider(player, meteo4, hitmeteo, null, this);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FB2C00' });


}

function hitmeteo (player, meteo)
{
    player.setTint(0xff0000);
    this.physics.pause();
    speed = 0;
}

function update ()
{if (cursors.left.isDown)
{
    player.setVelocityX(-400);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(400);
}
else
{
    player.setVelocityX(0);
}
if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-330);
}    
{
    meteo2.setVelocityY(speed);
}
if (meteo2.y >600)
{
    meteo2.y = Phaser.Math.Between(-10, 0) 
    meteo2.x = Phaser.Math.Between(0, 150); 
    score += 1;
    scoreText.setText('Score: ' + score);
}  
    meteo1.setVelocityY(speed);
if (meteo1.y >600)
{
    meteo1.y = Phaser.Math.Between(-100, 0)
    meteo1.x = Phaser.Math.Between(0, 250);
    score += 1;
    scoreText.setText('Score: ' + score);
}    
    meteo4.setVelocityY(speed);
if (meteo4.y >600)
{
    meteo4.y = Phaser.Math.Between(-110, 0)
    meteo4.x = Phaser.Math.Between(50, 350);
    score += 1;
    scoreText.setText('Score: ' + score);
}
    meteo3.setVelocityY(speed);
if (meteo3.y >670)
{
    meteo3.y = Phaser.Math.Between(-50, 0)
    meteo3.x = Phaser.Math.Between(250, 400); 
    score += 1;
    scoreText.setText('Score: ' + score);
}
if (score == 5)
{
    speed = 250;
}
if (score == 10)
{
    speed = 350;
}
if (score == 15)
{
    speed = 450;
}
if  (score == 20)
{
    speed = 500;
}
if (score == 25)
{
    speed = 550;
}
if (score == 30)
{
    speed = 600
} 
if (score == 35)
{
    speed = 650   
}
if (score == 40)
{
    speed = 700  
}
if (score == 45)
{
    speed = 750  
}
if (score == 50)
{
    speed = 700;
}
if (score == 55)
{
    speed = 750;
}
if (score == 60)
{
    speed = 850;
}
if (score == 65)
{
    speed = 900  
}
if (score == 70)
{
    speed = 950;
}
if (score == 70)
{
    speed = 1000;
}
if (score == 75)
{
    speed = 1100;
}
}