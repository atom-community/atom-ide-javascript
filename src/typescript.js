// This configures atom-typescript
export function setupTypeScript() {
  // use atom-typescript for javascript
  atom.config.set("atom-typescript.allowJS", true)
  // activate atom-typescript
  atom.commands.dispatch(atom.workspace.getElement(), "typescript:activate")
}
