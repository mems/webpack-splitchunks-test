## Setup

`npm i && npm run build && npm run serve`

## Expected result

The page should contains 🆗 not 🆖, because `src/style2.css` is imported after `src/style1.css`.

## CSS generation method

To use `mini-css-extract-plugin`, in `src/webpack.config.js`, set `EXTRACT` to `true`. Or [native CSS support (experimental)](https://webpack.js.org/configuration/experiments/#experimentscss) will be used.

## Split chunks

To enable split chunks, in `src/webpack.config.js`, set `SPLIT_CHUNKS` to `true`.

## Test prirority

To set chunk split priority to enforce chunk order, in `src/webpack.config.js`, set `PRIORITY` to `true`.

Note [the order is not guaranteed](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/548#issuecomment-779233845)
