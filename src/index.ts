#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { registerDocResources } from "./registerResources.js";

const server = new McpServer({
  name: "tiendanube-mcp",
  version: "1.0.0",
});

registerDocResources(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Error fatal al iniciar el servidor MCP:", err);
  process.exit(1);
});
