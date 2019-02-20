class bootGame extends Phaser.Scene{
	constructor() {
		super("BootGame");
	}

	preload() {
		this.load.image("instructions", "assets/sprites/instructions.png");
		this.load.image("tilemap", "assets/environment/tilemap.png");
	}

	create() {
		this.scene.start("MenuGame");
	}

}