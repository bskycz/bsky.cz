import type { GetStaticPathsOptions, GetStaticPathsResult } from 'astro';
import { getStaticPaths } from '../pages/og/[...path]';

const routes = (await getStaticPaths({} as GetStaticPathsOptions)) as GetStaticPathsResult;
const paths = new Set(routes.map(({ params }) => params.path));

export function getOgImageUrl(path: string): string | undefined {
	let imagePath = path.replace(/^\//, '').replace(/\/$/, '') + '.webp';

	console.log(paths);

	console.log(path, imagePath);
	if (paths.has(imagePath)) return '/og/' + imagePath;
}