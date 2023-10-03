# webpack-split-chunks-test

## Setup

`npm i && npm run build && npm run serve`

## No split CSS chunks

It's expected, and the color is green, see the import order in `src/index.js`

## Split CSS Chunks (uncomment the comments in webpack.config.js)

The color is red, the css chunks inserted into the html are not the same as the ones in the bundle
