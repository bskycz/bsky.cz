import { visit } from 'unist-util-visit';

/**
 * Bluesky oEmbed plugin for remark
 * @returns {function(*): Promise<unknown>}
 */
export default function bluesky() {
	return (tree) =>
		new Promise(async (resolve, reject) => {
			const linksToChange = [];


			visit(tree, 'link', (node) => {
				if (
					node.url &&
					node.children?.[0]?.value === node.url &&
					node.url.match(/https?:\/\/bsky\.app\/profile\/.*\/post\/.*/)
				) {
					linksToChange.push({node});
				}
			});

			for (const {node} of linksToChange) {
				try {
					const oembed = `https://embed.bsky.app/oembed?url=${node.url}`;
					const response = await fetch(oembed);

					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}

					const data = await response.json();

					if (data.html) {
						node.type = 'html';
						node.value = data.html;
					}
				} catch (error) {
					console.error('Error fetching oEmbed data for URL:', node.url, error);
					return reject(error);
				}
			}

			resolve();
		});
}