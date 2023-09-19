import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
		strict: true
	}
};

export default config;
