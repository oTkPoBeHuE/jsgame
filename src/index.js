import 'phaser';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';

const config = {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 1200,
	height: 800,
	physucs: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Example1, Example2, Example3]
};

const game = new Phaser.Game(config);
