var WebpackConfig = require('themekit-webpack-config')

var demo = new WebpackConfig()
	.withEntry('demo.js')
	.withEntry('vendor.js')
	.use('bower')
	.use('extract')
	.use('vendor')
	.use('commons')

var util = new WebpackConfig()
	.options({ srcPath: 'src/util' })
	.withLibrary('Util')
	.withEntry('util')
	.use('extract')

module.exports = [demo, util]