import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import ky from "ky";
import { z } from "zod";
import { ResponseType } from "../types/index.js";

export function MCPTools(server: McpServer) {
  server.tool(
    "add",
    "Add two numbers",
    { a: z.number(), b: z.number() },
    async ({ a, b }) => {
      console.log("add function is called");
      return {
        content: [
          {
            type: ResponseType.TEXT,
            text: String(a + b),
          },
        ],
      };
    }
  );
}
