"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupTypeScript = setupTypeScript;

// This configures atom-typescript
function setupTypeScript() {
  // use atom-typescript for javascript
  atom.config.set("atom-typescript.allowJS", true); // disable check files which slows down Atom

  atom.config.set("atom-typescript.checkAllFilesOnSave", false); // activate atom-typescript

  atom.commands.dispatch(atom.workspace.getElement(), "typescript:activate"); // support flow in JavaScript files

  const ignoredDiagnosticCodes = Array.from(new Set(atom.config.get("atom-typescript.ignoredDiagnosticCodes").concat(["8002", "8003", "8004", "8006", "8008", "8010"])));
  atom.config.set("atom-typescript.ignoredDiagnosticCodes", ignoredDiagnosticCodes);
  const jsSyntaxScopes = Array.from(new Set(atom.config.get("atom-typescript.jsSyntaxScopes").concat(["source.flow"])));
  atom.config.set("atom-typescript.jsSyntaxScopes", jsSyntaxScopes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQuanMiXSwibmFtZXMiOlsic2V0dXBUeXBlU2NyaXB0IiwiYXRvbSIsImNvbmZpZyIsInNldCIsImNvbW1hbmRzIiwiZGlzcGF0Y2giLCJ3b3Jrc3BhY2UiLCJnZXRFbGVtZW50IiwiaWdub3JlZERpYWdub3N0aWNDb2RlcyIsIkFycmF5IiwiZnJvbSIsIlNldCIsImdldCIsImNvbmNhdCIsImpzU3ludGF4U2NvcGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxlQUFULEdBQTJCO0FBQ2hDO0FBQ0FDLEVBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCLHlCQUFoQixFQUEyQyxJQUEzQyxFQUZnQyxDQUdoQzs7QUFDQUYsRUFBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVlDLEdBQVosQ0FBZ0IscUNBQWhCLEVBQXVELEtBQXZELEVBSmdDLENBS2hDOztBQUNBRixFQUFBQSxJQUFJLENBQUNHLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkosSUFBSSxDQUFDSyxTQUFMLENBQWVDLFVBQWYsRUFBdkIsRUFBb0QscUJBQXBELEVBTmdDLENBT2hDOztBQUNBLFFBQU1DLHNCQUFzQixHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FDN0IsSUFBSUMsR0FBSixDQUNFVixJQUFJLENBQUNDLE1BQUwsQ0FBWVUsR0FBWixDQUFnQix3Q0FBaEIsRUFBMERDLE1BQTFELENBQWlFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsTUFBekMsQ0FBakUsQ0FERixDQUQ2QixDQUEvQjtBQUtBWixFQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsR0FBWixDQUFnQix3Q0FBaEIsRUFBMERLLHNCQUExRDtBQUVBLFFBQU1NLGNBQWMsR0FBR0wsS0FBSyxDQUFDQyxJQUFOLENBQVcsSUFBSUMsR0FBSixDQUFRVixJQUFJLENBQUNDLE1BQUwsQ0FBWVUsR0FBWixDQUFnQixnQ0FBaEIsRUFBa0RDLE1BQWxELENBQXlELENBQUMsYUFBRCxDQUF6RCxDQUFSLENBQVgsQ0FBdkI7QUFDQVosRUFBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsZ0NBQWhCLEVBQWtEVyxjQUFsRDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgY29uZmlndXJlcyBhdG9tLXR5cGVzY3JpcHRcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFR5cGVTY3JpcHQoKSB7XG4gIC8vIHVzZSBhdG9tLXR5cGVzY3JpcHQgZm9yIGphdmFzY3JpcHRcbiAgYXRvbS5jb25maWcuc2V0KFwiYXRvbS10eXBlc2NyaXB0LmFsbG93SlNcIiwgdHJ1ZSlcbiAgLy8gZGlzYWJsZSBjaGVjayBmaWxlcyB3aGljaCBzbG93cyBkb3duIEF0b21cbiAgYXRvbS5jb25maWcuc2V0KFwiYXRvbS10eXBlc2NyaXB0LmNoZWNrQWxsRmlsZXNPblNhdmVcIiwgZmFsc2UpXG4gIC8vIGFjdGl2YXRlIGF0b20tdHlwZXNjcmlwdFxuICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoKGF0b20ud29ya3NwYWNlLmdldEVsZW1lbnQoKSwgXCJ0eXBlc2NyaXB0OmFjdGl2YXRlXCIpXG4gIC8vIHN1cHBvcnQgZmxvdyBpbiBKYXZhU2NyaXB0IGZpbGVzXG4gIGNvbnN0IGlnbm9yZWREaWFnbm9zdGljQ29kZXMgPSBBcnJheS5mcm9tKFxuICAgIG5ldyBTZXQoXG4gICAgICBhdG9tLmNvbmZpZy5nZXQoXCJhdG9tLXR5cGVzY3JpcHQuaWdub3JlZERpYWdub3N0aWNDb2Rlc1wiKS5jb25jYXQoW1wiODAwMlwiLCBcIjgwMDNcIiwgXCI4MDA0XCIsIFwiODAwNlwiLCBcIjgwMDhcIiwgXCI4MDEwXCJdKVxuICAgIClcbiAgKVxuICBhdG9tLmNvbmZpZy5zZXQoXCJhdG9tLXR5cGVzY3JpcHQuaWdub3JlZERpYWdub3N0aWNDb2Rlc1wiLCBpZ25vcmVkRGlhZ25vc3RpY0NvZGVzKVxuXG4gIGNvbnN0IGpzU3ludGF4U2NvcGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGF0b20uY29uZmlnLmdldChcImF0b20tdHlwZXNjcmlwdC5qc1N5bnRheFNjb3Blc1wiKS5jb25jYXQoW1wic291cmNlLmZsb3dcIl0pKSlcbiAgYXRvbS5jb25maWcuc2V0KFwiYXRvbS10eXBlc2NyaXB0LmpzU3ludGF4U2NvcGVzXCIsIGpzU3ludGF4U2NvcGVzKVxufVxuXG4vKlxuXCInaW1wb3J0IC4uLiA9JyBjYW4gb25seSBiZSB1c2VkIGluIFR5cGVTY3JpcHQgZmlsZXMuXCI6IHtcbiAgICBcImNhdGVnb3J5XCI6IFwiRXJyb3JcIixcbiAgICBcImNvZGVcIjogODAwMlxufSxcblwiJ2V4cG9ydCA9JyBjYW4gb25seSBiZSB1c2VkIGluIFR5cGVTY3JpcHQgZmlsZXMuXCI6IHtcbiAgICBcImNhdGVnb3J5XCI6IFwiRXJyb3JcIixcbiAgICBcImNvZGVcIjogODAwM1xufSxcblwiVHlwZSBwYXJhbWV0ZXIgZGVjbGFyYXRpb25zIGNhbiBvbmx5IGJlIHVzZWQgaW4gVHlwZVNjcmlwdCBmaWxlcy5cIjoge1xuICAgIFwiY2F0ZWdvcnlcIjogXCJFcnJvclwiLFxuICAgIFwiY29kZVwiOiA4MDA0XG59LFxuXCInaW1wbGVtZW50cycgY2xhdXNlcyBjYW4gb25seSBiZSB1c2VkIGluIFR5cGVTY3JpcHQgZmlsZXMuXCI6IHtcbiAgICBcImNhdGVnb3J5XCI6IFwiRXJyb3JcIixcbiAgICBcImNvZGVcIjogODAwNVxufSxcblwiJ3swfScgZGVjbGFyYXRpb25zIGNhbiBvbmx5IGJlIHVzZWQgaW4gVHlwZVNjcmlwdCBmaWxlcy5cIjoge1xuICAgIFwiY2F0ZWdvcnlcIjogXCJFcnJvclwiLFxuICAgIFwiY29kZVwiOiA4MDA2XG59LFxuXCJUeXBlIGFsaWFzZXMgY2FuIG9ubHkgYmUgdXNlZCBpbiBUeXBlU2NyaXB0IGZpbGVzLlwiOiB7XG4gICAgXCJjYXRlZ29yeVwiOiBcIkVycm9yXCIsXG4gICAgXCJjb2RlXCI6IDgwMDhcbn0sXG5cIlRoZSAnezB9JyBtb2RpZmllciBjYW4gb25seSBiZSB1c2VkIGluIFR5cGVTY3JpcHQgZmlsZXMuXCI6IHtcbiAgICBcImNhdGVnb3J5XCI6IFwiRXJyb3JcIixcbiAgICBcImNvZGVcIjogODAwOVxufSxcblwiVHlwZSBhbm5vdGF0aW9ucyBjYW4gb25seSBiZSB1c2VkIGluIFR5cGVTY3JpcHQgZmlsZXMuXCI6IHtcbiAgICBcImNhdGVnb3J5XCI6IFwiRXJyb3JcIixcbiAgICBcImNvZGVcIjogODAxMFxufSxcblwiVHlwZSBhcmd1bWVudHMgY2FuIG9ubHkgYmUgdXNlZCBpbiBUeXBlU2NyaXB0IGZpbGVzLlwiOiB7XG4gICAgXCJjYXRlZ29yeVwiOiBcIkVycm9yXCIsXG4gICAgXCJjb2RlXCI6IDgwMTFcbn0sXG5cIlBhcmFtZXRlciBtb2RpZmllcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBUeXBlU2NyaXB0IGZpbGVzLlwiOiB7XG4gICAgXCJjYXRlZ29yeVwiOiBcIkVycm9yXCIsXG4gICAgXCJjb2RlXCI6IDgwMTJcbn0sXG5cIk5vbi1udWxsIGFzc2VydGlvbnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBUeXBlU2NyaXB0IGZpbGVzLlwiOiB7XG4gICAgXCJjYXRlZ29yeVwiOiBcIkVycm9yXCIsXG4gICAgXCJjb2RlXCI6IDgwMTNcbn0sXG5cIlR5cGUgYXNzZXJ0aW9uIGV4cHJlc3Npb25zIGNhbiBvbmx5IGJlIHVzZWQgaW4gVHlwZVNjcmlwdCBmaWxlcy5cIjoge1xuICAgIFwiY2F0ZWdvcnlcIjogXCJFcnJvclwiLFxuICAgIFwiY29kZVwiOiA4MDE2XG59LFxuKi9cbiJdfQ==