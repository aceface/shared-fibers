var crayon = require('crayon');

var pkg = require('./package');

var version = pkg.version;
var fibersVersion = pkg.dependencies.fibers;

if (global.___sharedFibers_sharedFiber == null) {
  global.___sharedFibers_sharedFiber = require('fibers');
  global.___sharedFibers_fibersVersion = fibersVersion;
} else {
  if (global.___sharedFibers_fibersVersion != fibersVersion) {
    crayon.red.bold.warn("Warning: node-fibers versions don't match: %s vs %s", version, global.___sharedFibers_fibersVersion);
    // TODO: Require some version parsing module and then determine if they really
    // don't match
  }
}

module.exports = global.___sharedFibers_sharedFiber;

