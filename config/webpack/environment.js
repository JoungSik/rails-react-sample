const { environment } = require('@rails/webpacker')

module.exports = environment
// Rails React 에서 web packer 에러가 나는 상황
// https://github.com/edsinclair/rails-react-table-test/blob/master/config/webpack/environment.js
const nodeModulesLoader = environment.loaders.get('nodeModules')
if (!Array.isArray(nodeModulesLoader.exclude)) {
  nodeModulesLoader.exclude = (nodeModulesLoader.exclude == null) ? [] : [nodeModulesLoader.exclude]
}