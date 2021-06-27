const express = require('express');
require('express-async-errors');
const gatsby = require('gatsby-plugin-nodejs');
const dotenv = require('dotenv');

dotenv.config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
	api_secret: process.env.GATSBY_CLOUDINARY_API_SECRET,
});

dotenv.config();

const app = express();

gatsby.prepare({ app }, () => {
	app.use(express.json());

	app.post('/api/image-upload', async (req, res) => {
		const file = req.body.file;
		const uploadRes = await cloudinary.uploader.upload(file, {});

		res.send(uploadRes);
	});
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
