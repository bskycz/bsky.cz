// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// Markdown plugins
import links from './src/markdown/links.js';
import youtube from "./src/markdown/youtube.js";
import bluesky from "./src/markdown/bluesky.js";

const site = "https://bsky.cz";

export default defineConfig({
	site,
	markdown: {
		remarkPlugins: [links, youtube, bluesky]
	},
	image: {
		service: passthroughImageService(),
	},
	integrations: [
		//embeds(),
		starlight({
			components: {
				Head: './src/components/Head.astro',
			},
			title: 'bsky.cz',
			locales: {
				root: {
					label: 'Česky',
					lang: 'cs',
				},
			},
			tableOfContents: true,
			social: [
				{icon: "github", href: 'https://github.com/bskycz', label: "GitHub"},
				{icon: "blueSky", href: 'https://bsky.app/profile/bsky.cz', label: "BlueSky"},
				{icon: "discord", href: 'https://discord.com/invite/DT6VcuEvXx', label: "Discord"},
			],
			editLink: {
				baseUrl: 'https://github.com/bskycz/wiki/edit/main/'
			},
			customCss: [
				'./src/style.css',
			],
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
				replacesTitle: true,
			},
			sidebar: [
				{label: 'Domů', link: '/'},
				{label: 'Nástroje', collapsed: false, autogenerate: {directory: 'nastroje', collapsed: true}},
				{label: 'Vysvětlujeme', collapsed: false, autogenerate: {directory: 'definice', collapsed: true}},
				{label: 'Návody', collapsed: false, autogenerate: {directory: 'navody', collapsed: true}},
				{label: 'Naše projekty', collapsed: false, autogenerate: {directory: 'projekty', collapsed: true}},
				{label: 'O nás', link: '/o-nas'},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()]
	}
});
