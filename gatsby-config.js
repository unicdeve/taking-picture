require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'taking-picture',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'static/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './static/images/',
			},
			__key: 'images',
		},
	],
};
