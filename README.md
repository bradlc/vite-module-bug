In this project the `main.js` is [registered as a dependency](https://github.com/bradlc/vite-module-bug/blob/main/postcss.config.js#L17-L22) in a PostCSS plugin. The plugin reads the CSS from the comment in `main.js` and appends it to the CSS root. Editing `main.js` should trigger a rebuild and update the CSS but it does not.

### Reproduction Steps

1. `npm install`
2. `npm run dev`
3. Edit the CSS comment in `main.js` and notice that the styles do not update
