// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx'; // Import the MDX integration
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	integrations: [
		expressiveCode(), // Add Expressive Code integration here
		mdx(), // Add MDX integration here
					starlight({
						title: 'IT Ops Docs',

		
																														components: {

		
																															SiteTitle: './src/components/starlight/SiteTitle.astro',

		
																															Layout: './src/components/starlight/Layout.astro',

		
																															SocialIcons: './src/components/starlight/SocialIcons.astro',

		
																														},						customCss: ['./src/assets/custom.css'],


				sidebar: [				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Knowledge Base',
					autogenerate: { directory: 'knowledge-base' },
				},
			],
		}),
	],
});
