import type { AutoGenConfig, NuclideDebuggerProvider } from "@atom-ide-community/nuclide-debugger-common/types"
import * as React from "react"
import path from "path"
import { AutoGenLaunchAttachProvider } from "@atom-ide-community/nuclide-debugger-common/AutoGenLaunchAttachProvider"

export function createNodeDebuggerProvider(): NuclideDebuggerProvider {
  return {
    type: "node",
    getLaunchAttachProvider: (connection) => {
      return new AutoGenLaunchAttachProvider("Node", connection, getNodeConfig())
    },
  }
}

function getNodeConfig(): AutoGenConfig {
  const program = {
    name: "program",
    type: "string",
    description: "Absolute path to the program.",
    required: true,
    visible: true,
  }
  const cwd = {
    name: "cwd",
    type: "string",
    description: "Absolute path to the working directory of the program being debugged.",
    required: true,
    visible: true,
  }
  const stopOnEntry = {
    name: "stopOnEntry",
    type: "boolean",
    description: "Automatically stop program after launch.",
    defaultValue: false,
    required: false,
    visible: true,
  }

  const args = {
    name: "args",
    type: "array",
    itemType: "string",
    description: "Command line arguments passed to the program.",
    defaultValue: [],
    required: false,
    visible: true,
  }
  const runtimeExecutable = {
    name: "runtimeExecutable",
    type: "string",
    description: "(Optional) Runtime to use, an absolute path or the name of a runtime available on PATH",
    required: false,
    visible: true,
  }
  const env = {
    name: "env",
    type: "object",
    description: "(Optional) Environment variables (e.g. SHELL=/bin/bash PATH=/bin)",
    defaultValue: {},
    required: false,
    visible: true,
  }
  const outFiles = {
    name: "outFiles",
    type: "array",
    itemType: "string",
    description: "(Optional) When source maps are enabled, these glob patterns specify the generated JavaScript files",
    defaultValue: [],
    required: false,
    visible: true,
  }
  const protocol = {
    name: "protocol",
    type: "string",
    description: "",
    defaultValue: "inspector",
    required: false,
    visible: false,
  }

  const consoleEnum = {
    name: "console",
    type: "enum",
    enums: ["internalConsole", "integratedTerminal"],
    description:
      "Integrated Terminal means that it will run in a terminal that can interact with standard input and output.",
    defaultValue: "internalConsole",
    required: true,
    visible: true,
  }

  const port = {
    name: "port",
    type: "number",
    description: "Port",
    required: true,
    visible: true,
  }

  const adapterExecutable = {
    command: "node",
    args: [path.resolve(path.join(__dirname, "VendorLib/vscode-node-debug2/out/src/nodeDebug.js"))],
  }
  const adapterRoot = path.resolve(path.join(__dirname, "VendorLib/vscode-node-debug2"))

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
      header: <p>This is intended to debug node.js files (for node version 6.3+).</p>,
      getProcessName(values) {
        let processName = values.program
        const lastSlash = processName.lastIndexOf("/")
        if (lastSlash >= 0) {
          processName = processName.substring(lastSlash + 1, processName.length)
        }
        return processName + " (Node)"
      },
    },
    attach: {
      launch: false,
      vsAdapterType: "node",
      adapterExecutable,
      adapterRoot,
      properties: [port],
      scriptExtension: ".js",
      header: <p>Attach to a running node.js process</p>,
      getProcessName(values) {
        return "Port: " + values.port + " (Node attach)"
      },
    },
  }
}
