import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippets: [
			{
				title: "Ini's code snippets",
				language: 'html',
				code: '<h1>Hello world</h1>',
				favorite: false
			}
		]
	};
}) satisfies PageLoad;
