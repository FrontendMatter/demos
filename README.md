# ThemeKit Demos

> [demos.themekit.io](http://demos.themekit.io)

## Build

> You can easily build themekit-demos yourself.

### Prerequisites

Our build tool of choice is Webpack. You should have webpack installed globally:

	npm install -g webpack

And the build dependencies:

	npm install && bower install

#### Production build

Includes minification and several optimizations:

	npm run build

#### Development build

A faster build suited for development, with no optimizations and without minification:

	npm run build-dev
	
### Development server

> You can start a development server on http://localhost:8082 specifically for the demos, with FAST incremental builds and HOT reloading (using webpack-dev-server). 

#### Prerequisites

	npm install -g webpack-dev-server
	
#### Start server

	npm run dev
	
### Simple HTTP server

> You can also start a simple HTTP server on http://localhost:8081. Note this will NOT build anyting! Before starting this server, make sure you make a static build first (dev or production - see above):

	npm run serve