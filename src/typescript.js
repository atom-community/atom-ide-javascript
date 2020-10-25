// This configures atom-typescript
export function setupTypeScript() {
  // use atom-typescript for javascript
  atom.config.set("atom-typescript.allowJS", true)
  // disable check files which slows down Atom
  atom.config.set("atom-typescript.checkAllFilesOnSave", false)
  // activate atom-typescript
  atom.commands.dispatch(atom.workspace.getElement(), "typescript:activate")
  // support flow in JavaScript files
  const ignoredDiagnosticCodes = Array.from(
    new Set(
      atom.config.get("atom-typescript.ignoredDiagnosticCodes").concat(["8002", "8003", "8004", "8006", "8008", "8010"])
    )
  )
  atom.config.set("atom-typescript.ignoredDiagnosticCodes", ignoredDiagnosticCodes)

  const jsSyntaxScopes = Array.from(new Set(atom.config.get("atom-typescript.jsSyntaxScopes").concat(["source.flow"])))
  atom.config.set("atom-typescript.jsSyntaxScopes", jsSyntaxScopes)
}

/*
"'import ... =' can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8002
},
"'export =' can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8003
},
"Type parameter declarations can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8004
},
"'implements' clauses can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8005
},
"'{0}' declarations can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8006
},
"Type aliases can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8008
},
"The '{0}' modifier can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8009
},
"Type annotations can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8010
},
"Type arguments can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8011
},
"Parameter modifiers can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8012
},
"Non-null assertions can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8013
},
"Type assertion expressions can only be used in TypeScript files.": {
    "category": "Error",
    "code": 8016
},
*/
