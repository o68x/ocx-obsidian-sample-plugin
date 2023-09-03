import { App, Modal } from "obsidian";

import MyModal from "./MyModal.svelte"

export class MyPluginModal extends Modal {
	myModal: MyModal;

	constructor(app: App) {
		super(app);
	}

	onOpen() {
		this.myModal = new MyModal({
			target: this.contentEl,
			props: {
				variable: 1
			}
		})
	}

	onClose() {
		this.myModal.$destroy();
	}
}
