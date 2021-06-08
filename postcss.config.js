const fs = require('fs')
const path = require('path')

module.exports = {
  plugins: [plugin],
}

function plugin() {
  return {
    postcssPlugin: 'plugin',
    Once(root, { result }) {
      let file = path.resolve(__dirname, 'main.js')

      root.append(fs.readFileSync(file, 'utf8').match(/\/\*(.*?)\*\//s)[1])

      result.messages.push({
        type: 'dependency',
        file,
        plugin: 'plugin',
        parent: result.opts.from,
      })
    },
  }
}

plugin.postcss = true
