class menuGame extends Phaser.Scene{
	constructor() {
		super("MenuGame");
	}

	create() {

	}

	update() {
		this.scene.start("Level01Game");
	}
}