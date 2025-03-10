import {visit} from 'unist-util-visit';

export default function links() {

	return tree => {
		visit(tree, 'link', (node) => {
			// add noopener and noreferrer to external links
			if (URL.canParse(node.url)) {
				const link = new URL(node.url);
				if (link.hostname !== 'bsky.cz') {
					const hProperties = node.data?.hProperties ?? {};

					hProperties.target = '_blank';
					hProperties.rel = ['noopener', 'noreferrer'];

					node.data = {hProperties};
				}
			}
		});
	};
}