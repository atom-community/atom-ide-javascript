let presets = ["babel-preset-atomic"]

let plugins = []

module.exports = {
  presets: presets,
  plugins: plugins,
  exclude: ["node_modules/**", "src/debugger/node/VendorLib/**"],
  sourceMap: "inline",
}
