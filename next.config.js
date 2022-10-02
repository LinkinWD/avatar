module.exports = {
	images: {
		domains: [ 'images.ctfassets.net' ]
	}
};
module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://linkinwd.fi/:path*'
			}
		];
	}
};
