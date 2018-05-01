export default class Example1 extends Phaser.Scene {
	constructor() {
		super({ key: 'Example1' });
	}

	preload() {
		//this.load.image('logo', 'assets/logo.png');
		this.load.image('background', 'assets/background.jpg');
		this.load.image('player', 'assets/player.gif');
	}

	create() {
		this.background = this.add.sprite(500, 350, 'background');
		this.player = this.add.sprite(100, 420, 'player');

		this.key_RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
		this.key_LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		//this.key_UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		// this.input.keyboard.on('keyup_UP', evant => {
		//
		// });
	}

	update(delta) {
		//	this.player.angle += 10;
		if (this.key_RIGHT.isDown) {
			this.player.x += 4;
		}

		if (this.key_LEFT.isDown) {
			this.player.x -= 4;
		}
	}
}
