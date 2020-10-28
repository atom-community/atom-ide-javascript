"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;
exports.deactivate = deactivate;
Object.defineProperty(exports, "createNodeDebuggerProvider", {
  enumerable: true,
  get: function () {
    return _main.createNodeDebuggerProvider;
  }
});

var _atom = require("atom");

var _typescript = require("./typescript.js");

var _main = require("./debugger/node/main");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let subscriptions;
/**
 * called by Atom when activating an extension
 * @param  {any} state the current state of atom
 */

function activate(state) {
  // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
  subscriptions = new _atom.CompositeDisposable();
  package_deps().then(() => {
    (0, _typescript.setupTypeScript)();
  }).catch(e => {
    atom.notifications.addError("atom-ide-javascript failed in installing its dependencies.");
  });
}
/**
 * install Atom package dependencies if not already loaded
 */


async function package_deps() {
  // Add entries from package-deps here manually
  // (to prevent loading atom-package-deps and package.json when the deps are already loaded)
  const deps = ["atom-ide-base", "atom-typescript", "linter-eslint", "autocomplete-paths", "javascript-drag-import"];

  if (deps.some(p => !atom.packages.isPackageLoaded(p))) {
    await Promise.resolve().then(() => _interopRequireWildcard(require("atom-package-deps"))).then(atom_package_deps => {
      // install if not installed
      atom_package_deps.install("atom-ide-javascript", false); // enable if disabled

      deps.filter(p => !atom.packages.isPackageLoaded(p)).forEach(p => {
        atom.notifications.addInfo(`Enabling package ${p} that is needed for atom-ide-javascript`);
        atom.packages.enablePackage(p);
      });
    });
  }
}
/**
 * called by Atom when deactivating an extension
 */


function deactivate() {
  if (subscriptions) {
    subscriptions.dispose();
  }

  subscriptions = null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3Vic2NyaXB0aW9ucyIsImFjdGl2YXRlIiwic3RhdGUiLCJDb21wb3NpdGVEaXNwb3NhYmxlIiwicGFja2FnZV9kZXBzIiwidGhlbiIsImNhdGNoIiwiZSIsImF0b20iLCJub3RpZmljYXRpb25zIiwiYWRkRXJyb3IiLCJkZXBzIiwic29tZSIsInAiLCJwYWNrYWdlcyIsImlzUGFja2FnZUxvYWRlZCIsImF0b21fcGFja2FnZV9kZXBzIiwiaW5zdGFsbCIsImZpbHRlciIsImZvckVhY2giLCJhZGRJbmZvIiwiZW5hYmxlUGFja2FnZSIsImRlYWN0aXZhdGUiLCJkaXNwb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFJQSxhQUFKO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDOUI7QUFDQUYsRUFBQUEsYUFBYSxHQUFHLElBQUlHLHlCQUFKLEVBQWhCO0FBRUFDLEVBQUFBLFlBQVksR0FDVEMsSUFESCxDQUNRLE1BQU07QUFDVjtBQUNELEdBSEgsRUFJR0MsS0FKSCxDQUlVQyxDQUFELElBQU87QUFDWkMsSUFBQUEsSUFBSSxDQUFDQyxhQUFMLENBQW1CQyxRQUFuQixDQUE0Qiw0REFBNUI7QUFDRCxHQU5IO0FBT0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLGVBQWVOLFlBQWYsR0FBOEI7QUFDNUI7QUFDQTtBQUNBLFFBQU1PLElBQUksR0FBRyxDQUFDLGVBQUQsRUFBa0IsaUJBQWxCLEVBQXFDLGVBQXJDLEVBQXNELG9CQUF0RCxFQUE0RSx3QkFBNUUsQ0FBYjs7QUFDQSxNQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBV0MsQ0FBRCxJQUFPLENBQUNMLElBQUksQ0FBQ00sUUFBTCxDQUFjQyxlQUFkLENBQThCRixDQUE5QixDQUFsQixDQUFKLEVBQXlEO0FBQ3ZELFVBQU0sNkRBQU8sbUJBQVAsSUFBNEJSLElBQTVCLENBQWtDVyxpQkFBRCxJQUF1QjtBQUM1RDtBQUNBQSxNQUFBQSxpQkFBaUIsQ0FBQ0MsT0FBbEIsQ0FBMEIscUJBQTFCLEVBQWlELEtBQWpELEVBRjRELENBRzVEOztBQUNBTixNQUFBQSxJQUFJLENBQ0RPLE1BREgsQ0FDV0wsQ0FBRCxJQUFPLENBQUNMLElBQUksQ0FBQ00sUUFBTCxDQUFjQyxlQUFkLENBQThCRixDQUE5QixDQURsQixFQUVHTSxPQUZILENBRVlOLENBQUQsSUFBTztBQUNkTCxRQUFBQSxJQUFJLENBQUNDLGFBQUwsQ0FBbUJXLE9BQW5CLENBQTRCLG9CQUFtQlAsQ0FBRSx5Q0FBakQ7QUFDQUwsUUFBQUEsSUFBSSxDQUFDTSxRQUFMLENBQWNPLGFBQWQsQ0FBNEJSLENBQTVCO0FBQ0QsT0FMSDtBQU1ELEtBVkssQ0FBTjtBQVdEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNTLFVBQVQsR0FBc0I7QUFDM0IsTUFBSXRCLGFBQUosRUFBbUI7QUFDakJBLElBQUFBLGFBQWEsQ0FBQ3VCLE9BQWQ7QUFDRDs7QUFDRHZCLEVBQUFBLGFBQWEsR0FBRyxJQUFoQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRlRGlzcG9zYWJsZSB9IGZyb20gXCJhdG9tXCJcbmltcG9ydCB7IHNldHVwVHlwZVNjcmlwdCB9IGZyb20gXCIuL3R5cGVzY3JpcHQuanNcIlxuXG5leHBvcnQgeyBjcmVhdGVOb2RlRGVidWdnZXJQcm92aWRlciB9IGZyb20gXCIuL2RlYnVnZ2VyL25vZGUvbWFpblwiXG5cbmxldCBzdWJzY3JpcHRpb25zXG5cbi8qKlxuICogY2FsbGVkIGJ5IEF0b20gd2hlbiBhY3RpdmF0aW5nIGFuIGV4dGVuc2lvblxuICogQHBhcmFtICB7YW55fSBzdGF0ZSB0aGUgY3VycmVudCBzdGF0ZSBvZiBhdG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShzdGF0ZSkge1xuICAvLyBFdmVudHMgc3Vic2NyaWJlZCB0byBpbiBhdG9tJ3Mgc3lzdGVtIGNhbiBiZSBlYXNpbHkgY2xlYW5lZCB1cCB3aXRoIGEgQ29tcG9zaXRlRGlzcG9zYWJsZVxuICBzdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKVxuXG4gIHBhY2thZ2VfZGVwcygpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0dXBUeXBlU2NyaXB0KClcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZEVycm9yKFwiYXRvbS1pZGUtamF2YXNjcmlwdCBmYWlsZWQgaW4gaW5zdGFsbGluZyBpdHMgZGVwZW5kZW5jaWVzLlwiKVxuICAgIH0pXG59XG5cbi8qKlxuICogaW5zdGFsbCBBdG9tIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGlmIG5vdCBhbHJlYWR5IGxvYWRlZFxuICovXG5hc3luYyBmdW5jdGlvbiBwYWNrYWdlX2RlcHMoKSB7XG4gIC8vIEFkZCBlbnRyaWVzIGZyb20gcGFja2FnZS1kZXBzIGhlcmUgbWFudWFsbHlcbiAgLy8gKHRvIHByZXZlbnQgbG9hZGluZyBhdG9tLXBhY2thZ2UtZGVwcyBhbmQgcGFja2FnZS5qc29uIHdoZW4gdGhlIGRlcHMgYXJlIGFscmVhZHkgbG9hZGVkKVxuICBjb25zdCBkZXBzID0gW1wiYXRvbS1pZGUtYmFzZVwiLCBcImF0b20tdHlwZXNjcmlwdFwiLCBcImxpbnRlci1lc2xpbnRcIiwgXCJhdXRvY29tcGxldGUtcGF0aHNcIiwgXCJqYXZhc2NyaXB0LWRyYWctaW1wb3J0XCJdXG4gIGlmIChkZXBzLnNvbWUoKHApID0+ICFhdG9tLnBhY2thZ2VzLmlzUGFja2FnZUxvYWRlZChwKSkpIHtcbiAgICBhd2FpdCBpbXBvcnQoXCJhdG9tLXBhY2thZ2UtZGVwc1wiKS50aGVuKChhdG9tX3BhY2thZ2VfZGVwcykgPT4ge1xuICAgICAgLy8gaW5zdGFsbCBpZiBub3QgaW5zdGFsbGVkXG4gICAgICBhdG9tX3BhY2thZ2VfZGVwcy5pbnN0YWxsKFwiYXRvbS1pZGUtamF2YXNjcmlwdFwiLCBmYWxzZSlcbiAgICAgIC8vIGVuYWJsZSBpZiBkaXNhYmxlZFxuICAgICAgZGVwc1xuICAgICAgICAuZmlsdGVyKChwKSA9PiAhYXRvbS5wYWNrYWdlcy5pc1BhY2thZ2VMb2FkZWQocCkpXG4gICAgICAgIC5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZEluZm8oYEVuYWJsaW5nIHBhY2thZ2UgJHtwfSB0aGF0IGlzIG5lZWRlZCBmb3IgYXRvbS1pZGUtamF2YXNjcmlwdGApXG4gICAgICAgICAgYXRvbS5wYWNrYWdlcy5lbmFibGVQYWNrYWdlKHApXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGNhbGxlZCBieSBBdG9tIHdoZW4gZGVhY3RpdmF0aW5nIGFuIGV4dGVuc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbiAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICBzdWJzY3JpcHRpb25zLmRpc3Bvc2UoKVxuICB9XG4gIHN1YnNjcmlwdGlvbnMgPSBudWxsXG59XG4iXX0=