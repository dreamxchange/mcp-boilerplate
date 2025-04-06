import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MCPTools } from "./tools/index.js";
import { SSEServer } from "./server.js";

const server = new McpServer({
    name: "mcp-boilerplate",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});

// Setup tools
MCPTools(server);

// SSE Server
SSEServer(server);
