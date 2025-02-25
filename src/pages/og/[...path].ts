import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'


type OGImageOptions = Awaited<ReturnType<Parameters<typeof OGImageRoute>[0]['getImageOptions']>>;


const allPages = await getCollection('docs')
const pages = Object.fromEntries(
	allPages.map(
		({filePath, id, data}) =>
			[filePath, {data, id}] as [string, Pick<CollectionEntry<'docs'>, 'data' | 'id'>]
	)
);

// @see https://github.com/withastro/docs/blob/main/src/pages/open-graph/%5B...path%5D.ts
export const {getStaticPaths, GET} = OGImageRoute({
	param: 'path',
	pages: pages,
	getSlug(_, page: (typeof pages)[string]) {
		return page.id.replace(/\..+$/, '.webp');
	},
	getImageOptions: async (_, {data}: (typeof pages)[string]): Promise<OGImageOptions> => {
		return {
			format: 'WEBP',
			title: data.title || "Bsky.cz",
			quality: 90,
			//logo: {path: './src/pages/og/og-logo.png', size: [300]},
			description: data.description || "Webové stránkách české Bluesky komunity",
			bgGradient: [[24, 24, 27]],
			border: {color: [17, 113, 254], side: "inline-start", width: 16},
			padding: 120,
			font: {
				title: {
					families: ['Inter', 'Noto Sans'],
					weight: 'Medium',
				},
				description: {
					families: ['Inter', 'Noto Sans'],
					lineHeight: 1.5,
					weight: 'Normal',
				},
			},
			fonts: [
				// Inter
				'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-ext-400-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-ext-500-normal.woff2',

				// Noto Sans
				'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-400-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-500-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-ext-400-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-ext-500-normal.woff2',
			]
		}
	},
})