import { CompositeDisposable } from "atom"
import { setupTypeScript } from "./typescript.js"

export { createNodeDebuggerProvider } from "./debugger/node/main"

let subscriptions

/**
 * called by Atom when activating an extension
 * @param  {any} state the current state of atom
 */
export function activate(state) {
  // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
  subscriptions = new CompositeDisposable()

  package_deps()
    .then(() => {
      setupTypeScript()
    })
    .catch((e) => {
      atom.notifications.addError("atom-ide-javascript failed in installing its dependencies.")
    })
}

/**
 * install Atom package dependencies if not already loaded
 */
async function package_deps() {
  // Add entries from package-deps here manually
  // (to prevent loading atom-package-deps and package.json when the deps are already loaded)
  const deps = ["atom-ide-base", "atom-typescript", "linter-eslint", "autocomplete-paths", "javascript-drag-import"]
  if (deps.some((p) => !atom.packages.isPackageLoaded(p))) {
    await import("atom-package-deps").then((atom_package_deps) => {
      // install if not installed
      atom_package_deps.install("atom-ide-javascript", false)
      // enable if disabled
      deps
        .filter((p) => !atom.packages.isPackageLoaded(p))
        .forEach((p) => {
          atom.notifications.addInfo(`Enabling package ${p} that is needed for atom-ide-javascript`)
          atom.packages.enablePackage(p)
        })
    })
  }
}

/**
 * called by Atom when deactivating an extension
 */
export function deactivate() {
  if (subscriptions) {
    subscriptions.dispose()
  }
  subscriptions = null
}
