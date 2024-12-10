// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// Markdown plugins
import links from './src/markdown/links.js';
import youtube from "./src/markdown/youtube.js";
import bluesky from "./src/markdown/bluesky.js";

const site = "https://beta.bsky.cz";

export default defineConfig({
	site,
	markdown: {
		remarkPlugins: [links, youtube, bluesky]
	},
	integrations: [
		//embeds(),
		starlight({
			title: 'bsky.cz',
			locales: {
				root: {
					label: 'Czech',
					lang: 'cs',
				},
			},
			tableOfContents: true,
			social: {
				github: 'https://github.com/bskycz',
				blueSky: "https://bsky.app/profile/bsky.cz",
				discord: 'https://discord.com/invite/DT6VcuEvXx',
			},
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
				{label: 'Návody', collapsed: false, autogenerate: {directory: 'navody', collapsed: true}},
				{label: 'Naše projekty', collapsed: false, autogenerate: {directory: 'projekty', collapsed: true}},
				{label: 'O nás', link: '/o-nas'},
			],
		}),
		tailwind({applyBaseStyles: false})
	],
});
