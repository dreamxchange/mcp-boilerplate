import express, { Request, Response } from "express";
import morgan from "morgan";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { useRequestId } from "./utils/useID.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// SSE Transports
const transports: { [sessionId: string]: SSEServerTransport } = {};

// SSE Server Init
const app = express();

// Middlewares
app.use(morgan("combined"));
app.use(useRequestId);

// SSE Routes
export function SSEServer(server: McpServer) {
    // SSE Connection
    app.get("/sse", async (_: Request, res: Response) => {
        const transport = new SSEServerTransport("/messages", res);
        transports[transport.sessionId] = transport;
        res.on("close", () => {
            delete transports[transport.sessionId];
        });
        await server.connect(transport);
    });

    // SSE Post Message
    app.post("/messages", async (req: Request, res: Response) => {
        const sessionId = req.query.sessionId as string;
        const transport = transports[sessionId];
        if (transport) {
            await transport.handlePostMessage(req, res);
        } else {
            res.status(400).send("No transport found for sessionId");
        }
    });

    // SSE Startup
    app.listen(process.env.PORT, () => {
        console.log(`[MCP] Server started on port ${process.env.PORT}`);
    });
}
