const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = function() {
  return {
    "@": resolve("src"),
    src: resolve("src"),
    "~": resolve("src/pages"),
    pages: resolve("src/pages"),
    "#": resolve("src/components"),
    components: resolve("src/components"),
    "^": resolve("src/assets"),
    assets: resolve("src/assets"),
    //...
    "react-native": "react-native-web"
  };
};
