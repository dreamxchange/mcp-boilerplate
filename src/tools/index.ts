import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import ky from "ky";
import { z } from "zod";
import { ResponseType } from "../types/index.js";

export function MCPTools(server: McpServer) {
    // This is a example tool that finds a post by id
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
                content: [
                    {
                        type: ResponseType.TEXT,
                        text: JSON.stringify(json),
                    },
                ],
            };
        },
    );

    // Add your own tools here
}
