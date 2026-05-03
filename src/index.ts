#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { registerDocResources } from "./registerResources.js";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

process.on("unhandledRejection", (reason) => {
  process.stderr.write(`[tiendanube-mcp] unhandledRejection: ${String(reason)}\n`);
});

const server = new McpServer({
  name: "tiendanube-mcp",
  version: "1.0.0",
});

async function main() {
  const { docCount } = await registerDocResources(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  process.stderr.write(
    `[tiendanube-mcp] Servidor iniciado. ${docCount} documento(s) registrado(s).\n`
  );
}

main().catch((err) => {
  process.stderr.write(`[tiendanube-mcp] Error fatal al iniciar el servidor MCP: ${String(err)}\n`);
  process.exit(1);
});
