export default class Example3 extends Phaser.Scene {
	constructor() {
		super({ key: 'Example3' });
	}

	preload() {
		//this.load.image('logo', 'assets/logo.png');
		this.load.image('background', 'assets/background.jpg');
		this.load.image('player', 'assets/player.gif');
	}

	create() {
		this.background = this.add.sprite(500, 350, 'background');
		this.player = this.add.sprite(100, 420, 'player');
		this.tweens.add({
			targets: logo,
			y: 50,
			duration: 2000,
			ease: 'Power2',
			yoyo: true,
			loop: -1
		});
	}

	update() {
		this.player.angle += 10;
	}
}
