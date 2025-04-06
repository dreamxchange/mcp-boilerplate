import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import ky from "ky";
import { z } from "zod";

export function MCPTools(server: McpServer) {
    server.tool(
        "find_post",
        "Find a post by id",
        {
            query: z.string(),
        },
        async ({ query }) => {
            const data = await ky.get(
                `https://jsonplaceholder.typicode.com/posts/${query}`,
            );

            const json = await data.json();

            return {
                content: [{
                    type: "text",
                    text: `${JSON.stringify(json)}`,
                }],
            };
        },
    );
}
