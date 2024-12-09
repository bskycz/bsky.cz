// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// Markdown plugins
import links from './src/markdown/links.js';
import youtube from "./src/markdown/youtube.js";
import bluesky from "./src/markdown/bluesky.js";

const site = "https://new.bsky.cz";

export default defineConfig({
	site,
	//base: '/wiki',
	markdown: {
		remarkPlugins: [links, youtube, bluesky]
	},
	integrations: [
		//embeds(),
		starlight({
			title: 'bsky.cz',
			tableOfContents: true,
			social: {
				github: 'https://github.com/bskycz',
			},
			editLink: {
				baseUrl: 'https://github.com/bskycz/wiki/edit/main/'
			},
			customCss: [
				'./src/style.css',
			],
			logo: {
				src: './src/assets/logo.svg',
			},
			sidebar: [
				{label: 'Domů', link: '/'},
				{label: 'Nástroje', collapsed: false, autogenerate: {directory: 'nastroje', collapsed: true}},
				{label: 'Návody', collapsed: false, autogenerate: {directory: 'navody', collapsed: true}},
				{label: 'O nás', link: '/o-nas'},
			],
		}),
		tailwind({applyBaseStyles: false})
	],
});
