import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('project');
	return rss({
		title: "Julián Esparza - Web Developer",
		description: "Sitio personal",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/project/${post.slug}/`,
		})),
	});
}
