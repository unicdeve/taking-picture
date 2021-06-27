const express = require('express');
const gatsby = require('gatsby-plugin-nodejs');

const app = express();

gatsby.prepare({ app }, () => {
	app.get('/api/image-upload', (req, res) => {
		res.send('Hello Taiwo in gatsb');
	});
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on port ${port}`));
