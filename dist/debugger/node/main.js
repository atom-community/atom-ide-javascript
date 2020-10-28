"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNodeDebuggerProvider = createNodeDebuggerProvider;

var React = _interopRequireWildcard(require("react"));

var _path = _interopRequireDefault(require("path"));

var _AutoGenLaunchAttachProvider = require("@atom-ide-community/nuclide-debugger-common/AutoGenLaunchAttachProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createNodeDebuggerProvider() {
  return {
    type: "node",
    getLaunchAttachProvider: connection => {
      return new _AutoGenLaunchAttachProvider.AutoGenLaunchAttachProvider("Node", connection, getNodeConfig());
    }
  };
}

function getNodeConfig() {
  const program = {
    name: "program",
    type: "string",
    description: "Absolute path to the program.",
    required: true,
    visible: true
  };
  const cwd = {
    name: "cwd",
    type: "string",
    description: "Absolute path to the working directory of the program being debugged.",
    required: true,
    visible: true
  };
  const stopOnEntry = {
    name: "stopOnEntry",
    type: "boolean",
    description: "Automatically stop program after launch.",
    defaultValue: false,
    required: false,
    visible: true
  };
  const args = {
    name: "args",
    type: "array",
    itemType: "string",
    description: "Command line arguments passed to the program.",
    defaultValue: [],
    required: false,
    visible: true
  };
  const runtimeExecutable = {
    name: "runtimeExecutable",
    type: "string",
    description: "(Optional) Runtime to use, an absolute path or the name of a runtime available on PATH",
    required: false,
    visible: true
  };
  const env = {
    name: "env",
    type: "object",
    description: "(Optional) Environment variables (e.g. SHELL=/bin/bash PATH=/bin)",
    defaultValue: {},
    required: false,
    visible: true
  };
  const outFiles = {
    name: "outFiles",
    type: "array",
    itemType: "string",
    description: "(Optional) When source maps are enabled, these glob patterns specify the generated JavaScript files",
    defaultValue: [],
    required: false,
    visible: true
  };
  const protocol = {
    name: "protocol",
    type: "string",
    description: "",
    defaultValue: "inspector",
    required: false,
    visible: false
  };
  const consoleEnum = {
    name: "console",
    type: "enum",
    enums: ["internalConsole", "integratedTerminal"],
    description: "Integrated Terminal means that it will run in a terminal that can interact with standard input and output.",
    defaultValue: "internalConsole",
    required: true,
    visible: true
  };
  const port = {
    name: "port",
    type: "number",
    description: "Port",
    required: true,
    visible: true
  };
  const adapterExecutable = {
    command: "node",
    args: [_path.default.resolve(_path.default.join(__dirname, "VendorLib/vscode-node-debug2/out/src/nodeDebug.js"))]
  };

  const adapterRoot = _path.default.resolve(_path.default.join(__dirname, "VendorLib/vscode-node-debug2"));

  return {
    launch: {
      launch: true,
      vsAdapterType: "node",
      adapterExecutable,
      adapterRoot,
      properties: [program, cwd, stopOnEntry, args, runtimeExecutable, env, outFiles, protocol, consoleEnum],
      scriptPropertyName: "program",
      cwdPropertyName: "cwd",
      scriptExtension: ".js",
      header: /*#__PURE__*/React.createElement("p", null, "This is intended to debug node.js files (for node version 6.3+)."),

      getProcessName(values) {
        let processName = values.program;
        const lastSlash = processName.lastIndexOf("/");

        if (lastSlash >= 0) {
          processName = processName.substring(lastSlash + 1, processName.length);
        }

        return processName + " (Node)";
      }

    },
    attach: {
      launch: false,
      vsAdapterType: "node",
      adapterExecutable,
      adapterRoot,
      properties: [port],
      scriptExtension: ".js",
      header: /*#__PURE__*/React.createElement("p", null, "Attach to a running node.js process"),

      getProcessName(values) {
        return "Port: " + values.port + " (Node attach)";
      }

    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY3JlYXRlTm9kZURlYnVnZ2VyUHJvdmlkZXIiLCJ0eXBlIiwiZ2V0TGF1bmNoQXR0YWNoUHJvdmlkZXIiLCJjb25uZWN0aW9uIiwiQXV0b0dlbkxhdW5jaEF0dGFjaFByb3ZpZGVyIiwiZ2V0Tm9kZUNvbmZpZyIsInByb2dyYW0iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyZXF1aXJlZCIsInZpc2libGUiLCJjd2QiLCJzdG9wT25FbnRyeSIsImRlZmF1bHRWYWx1ZSIsImFyZ3MiLCJpdGVtVHlwZSIsInJ1bnRpbWVFeGVjdXRhYmxlIiwiZW52Iiwib3V0RmlsZXMiLCJwcm90b2NvbCIsImNvbnNvbGVFbnVtIiwiZW51bXMiLCJwb3J0IiwiYWRhcHRlckV4ZWN1dGFibGUiLCJjb21tYW5kIiwicGF0aCIsInJlc29sdmUiLCJqb2luIiwiX19kaXJuYW1lIiwiYWRhcHRlclJvb3QiLCJsYXVuY2giLCJ2c0FkYXB0ZXJUeXBlIiwicHJvcGVydGllcyIsInNjcmlwdFByb3BlcnR5TmFtZSIsImN3ZFByb3BlcnR5TmFtZSIsInNjcmlwdEV4dGVuc2lvbiIsImhlYWRlciIsImdldFByb2Nlc3NOYW1lIiwidmFsdWVzIiwicHJvY2Vzc05hbWUiLCJsYXN0U2xhc2giLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsImxlbmd0aCIsImF0dGFjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLFNBQVNBLDBCQUFULEdBQStEO0FBQ3BFLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsSUFBQUEsdUJBQXVCLEVBQUdDLFVBQUQsSUFBZ0I7QUFDdkMsYUFBTyxJQUFJQyx3REFBSixDQUFnQyxNQUFoQyxFQUF3Q0QsVUFBeEMsRUFBb0RFLGFBQWEsRUFBakUsQ0FBUDtBQUNEO0FBSkksR0FBUDtBQU1EOztBQUVELFNBQVNBLGFBQVQsR0FBd0M7QUFDdEMsUUFBTUMsT0FBTyxH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R0EsV0FBVyxDQUFDRyxTQUFaLENBQXNCRixTQUFTLEdBQUcsQ0FBbEMsRUFBcUNELFdBQVcsQ0FBQ0ksTUFBakQsQ0FBZDtBQUNEOztBQUNELGVBQU9KLFdBQVcsR0FBRyxTQUFyQjtBQUNEOztBQWpCSyxLQURIO0FBb0JMSyxJQUFBQSxNQUFNLEVBQUU7QUFDTmQsTUFBQUEsTUFBTSxFQUFFLEtBREY7QUFFTkMsTUFBQUEsYUFBYSxFQUFFLE1BRlQ7QUFHTlIsTUFBQUEsaUJBSE07QUFJTk0sTUFBQUEsV0FKTTtBQUtORyxNQUFBQSxVQUFVLEVBQUUsQ0FBQ1YsSUFBRCxDQUxOO0FBTU5hLE1BQUFBLGVBQWUsRUFBRSxLQU5YO0FBT05DLE1BQUFBLE1BQU0sZUFBRSxxRUFQRjs7QUFRTkMsTUFBQUEsY0FBYyxDQUFDQyxNQUFELEVBQVM7QUFDckIsZUFBTyxXQUFXQSxNQUFNLENBQUNoQixJQUFsQixHQUF5QixnQkFBaEM7QUFDRDs7QUFWSztBQXBCSCxHQUFQO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBdXRvR2VuQ29uZmlnLCBOdWNsaWRlRGVidWdnZXJQcm92aWRlciB9IGZyb20gXCJAYXRvbS1pZGUtY29tbXVuaXR5L251Y2xpZGUtZGVidWdnZXItY29tbW9uL3R5cGVzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgeyBBdXRvR2VuTGF1bmNoQXR0YWNoUHJvdmlkZXIgfSBmcm9tIFwiQGF0b20taWRlLWNvbW11bml0eS9udWNsaWRlLWRlYnVnZ2VyLWNvbW1vbi9BdXRvR2VuTGF1bmNoQXR0YWNoUHJvdmlkZXJcIlxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZURlYnVnZ2VyUHJvdmlkZXIoKTogTnVjbGlkZURlYnVnZ2VyUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwibm9kZVwiLFxuICAgIGdldExhdW5jaEF0dGFjaFByb3ZpZGVyOiAoY29ubmVjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBBdXRvR2VuTGF1bmNoQXR0YWNoUHJvdmlkZXIoXCJOb2RlXCIsIGNvbm5lY3Rpb24sIGdldE5vZGVDb25maWcoKSlcbiAgICB9LFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVDb25maWcoKTogQXV0b0dlbkNvbmZpZyB7XG4gIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgbmFtZTogXCJwcm9ncmFtXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBYnNvbHV0ZSBwYXRoIHRvIHRoZSBwcm9ncmFtLlwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH1cbiAgY29uc3QgY3dkID0ge1xuICAgIG5hbWU6IFwiY3dkXCIsXG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBYnNvbHV0ZSBwYXRoIHRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBvZiB0aGUgcHJvZ3JhbSBiZWluZyBkZWJ1Z2dlZC5cIixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9XG4gIGNvbnN0IHN0b3BPbkVudHJ5ID0ge1xuICAgIG5hbWU6IFwic3RvcE9uRW50cnlcIixcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBdXRvbWF0aWNhbGx5IHN0b3AgcHJvZ3JhbSBhZnRlciBsYXVuY2guXCIsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0IGFyZ3MgPSB7XG4gICAgbmFtZTogXCJhcmdzXCIsXG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIGl0ZW1UeXBlOiBcInN0cmluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbW1hbmQgbGluZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBwcm9ncmFtLlwiLFxuICAgIGRlZmF1bHRWYWx1ZTogW10sXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH1cbiAgY29uc3QgcnVudGltZUV4ZWN1dGFibGUgPSB7XG4gICAgbmFtZTogXCJydW50aW1lRXhlY3V0YWJsZVwiLFxuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiKE9wdGlvbmFsKSBSdW50aW1lIHRvIHVzZSwgYW4gYWJzb2x1dGUgcGF0aCBvciB0aGUgbmFtZSBvZiBhIHJ1bnRpbWUgYXZhaWxhYmxlIG9uIFBBVEhcIixcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuICBjb25zdCBlbnYgPSB7XG4gICAgbmFtZTogXCJlbnZcIixcbiAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIihPcHRpb25hbCkgRW52aXJvbm1lbnQgdmFyaWFibGVzIChlLmcuIFNIRUxMPS9iaW4vYmFzaCBQQVRIPS9iaW4pXCIsXG4gICAgZGVmYXVsdFZhbHVlOiB7fSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuICBjb25zdCBvdXRGaWxlcyA9IHtcbiAgICBuYW1lOiBcIm91dEZpbGVzXCIsXG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIGl0ZW1UeXBlOiBcInN0cmluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIihPcHRpb25hbCkgV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgdGhlc2UgZ2xvYiBwYXR0ZXJucyBzcGVjaWZ5IHRoZSBnZW5lcmF0ZWQgSmF2YVNjcmlwdCBmaWxlc1wiLFxuICAgIGRlZmF1bHRWYWx1ZTogW10sXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH1cbiAgY29uc3QgcHJvdG9jb2wgPSB7XG4gICAgbmFtZTogXCJwcm90b2NvbFwiLFxuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgZGVmYXVsdFZhbHVlOiBcImluc3BlY3RvclwiLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgfVxuXG4gIGNvbnN0IGNvbnNvbGVFbnVtID0ge1xuICAgIG5hbWU6IFwiY29uc29sZVwiLFxuICAgIHR5cGU6IFwiZW51bVwiLFxuICAgIGVudW1zOiBbXCJpbnRlcm5hbENvbnNvbGVcIiwgXCJpbnRlZ3JhdGVkVGVybWluYWxcIl0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkludGVncmF0ZWQgVGVybWluYWwgbWVhbnMgdGhhdCBpdCB3aWxsIHJ1biBpbiBhIHRlcm1pbmFsIHRoYXQgY2FuIGludGVyYWN0IHdpdGggc3RhbmRhcmQgaW5wdXQgYW5kIG91dHB1dC5cIixcbiAgICBkZWZhdWx0VmFsdWU6IFwiaW50ZXJuYWxDb25zb2xlXCIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0IHBvcnQgPSB7XG4gICAgbmFtZTogXCJwb3J0XCIsXG4gICAgdHlwZTogXCJudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQb3J0XCIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0IGFkYXB0ZXJFeGVjdXRhYmxlID0ge1xuICAgIGNvbW1hbmQ6IFwibm9kZVwiLFxuICAgIGFyZ3M6IFtwYXRoLnJlc29sdmUocGF0aC5qb2luKF9fZGlybmFtZSwgXCJWZW5kb3JMaWIvdnNjb2RlLW5vZGUtZGVidWcyL291dC9zcmMvbm9kZURlYnVnLmpzXCIpKV0sXG4gIH1cbiAgY29uc3QgYWRhcHRlclJvb3QgPSBwYXRoLnJlc29sdmUocGF0aC5qb2luKF9fZGlybmFtZSwgXCJWZW5kb3JMaWIvdnNjb2RlLW5vZGUtZGVidWcyXCIpKVxuXG4gIHJldHVybiB7XG4gICAgbGF1bmNoOiB7XG4gICAgICBsYXVuY2g6IHRydWUsXG4gICAgICB2c0FkYXB0ZXJUeXBlOiBcIm5vZGVcIixcbiAgICAgIGFkYXB0ZXJFeGVjdXRhYmxlLFxuICAgICAgYWRhcHRlclJvb3QsXG4gICAgICBwcm9wZXJ0aWVzOiBbcHJvZ3JhbSwgY3dkLCBzdG9wT25FbnRyeSwgYXJncywgcnVudGltZUV4ZWN1dGFibGUsIGVudiwgb3V0RmlsZXMsIHByb3RvY29sLCBjb25zb2xlRW51bV0sXG4gICAgICBzY3JpcHRQcm9wZXJ0eU5hbWU6IFwicHJvZ3JhbVwiLFxuICAgICAgY3dkUHJvcGVydHlOYW1lOiBcImN3ZFwiLFxuICAgICAgc2NyaXB0RXh0ZW5zaW9uOiBcIi5qc1wiLFxuICAgICAgaGVhZGVyOiA8cD5UaGlzIGlzIGludGVuZGVkIHRvIGRlYnVnIG5vZGUuanMgZmlsZXMgKGZvciBub2RlIHZlcnNpb24gNi4zKykuPC9wPixcbiAgICAgIGdldFByb2Nlc3NOYW1lKHZhbHVlcykge1xuICAgICAgICBsZXQgcHJvY2Vzc05hbWUgPSB2YWx1ZXMucHJvZ3JhbVxuICAgICAgICBjb25zdCBsYXN0U2xhc2ggPSBwcm9jZXNzTmFtZS5sYXN0SW5kZXhPZihcIi9cIilcbiAgICAgICAgaWYgKGxhc3RTbGFzaCA+PSAwKSB7XG4gICAgICAgICAgcHJvY2Vzc05hbWUgPSBwcm9jZXNzTmFtZS5zdWJzdHJpbmcobGFzdFNsYXNoICsgMSwgcHJvY2Vzc05hbWUubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9jZXNzTmFtZSArIFwiIChOb2RlKVwiXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXR0YWNoOiB7XG4gICAgICBsYXVuY2g6IGZhbHNlLFxuICAgICAgdnNBZGFwdGVyVHlwZTogXCJub2RlXCIsXG4gICAgICBhZGFwdGVyRXhlY3V0YWJsZSxcbiAgICAgIGFkYXB0ZXJSb290LFxuICAgICAgcHJvcGVydGllczogW3BvcnRdLFxuICAgICAgc2NyaXB0RXh0ZW5zaW9uOiBcIi5qc1wiLFxuICAgICAgaGVhZGVyOiA8cD5BdHRhY2ggdG8gYSBydW5uaW5nIG5vZGUuanMgcHJvY2VzczwvcD4sXG4gICAgICBnZXRQcm9jZXNzTmFtZSh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFwiUG9ydDogXCIgKyB2YWx1ZXMucG9ydCArIFwiIChOb2RlIGF0dGFjaClcIlxuICAgICAgfSxcbiAgICB9LFxuICB9XG59XG4iXX0=