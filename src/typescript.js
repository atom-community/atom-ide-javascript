// This configures atom-typescript
export function setupTypeScript() {
  // use atom-typescript for javascript
  atom.config.set("atom-typescript.allowJS", true)
  // disable check files which slows down Atom
  atom.config.set("atom-typescript.checkAllFilesOnSave", false)
  // activate atom-typescript
  atom.commands.dispatch(atom.workspace.getElement(), "typescript:activate")
}
