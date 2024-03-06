import { defineConfig, defineViteConfig } from 'electron-vite';
import config from './vite.config.js';

export default defineConfig({
	renderer: config,
	main: defineViteConfig({}),
	preload: defineViteConfig({})
});
