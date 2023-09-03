import { App, PluginSettingTab, Setting } from "obsidian";

import type MyPlugin from "./main"

export interface MyPluginSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export class MyPluginSettingTab extends PluginSettingTab {
	private plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {

		this.containerEl.empty();

		this.containerEl.createEl("h3", {
			text: "General Settings"
		});

		this.addSettingOne();
	}

	addSettingOne(): void {
		new Setting(this.containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
