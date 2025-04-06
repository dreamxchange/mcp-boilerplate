import { randomUUID } from "node:crypto";
import { NextFunction, Request, Response } from "express";

// Generate a unique ID
export function useId() {
    return `mcp-${randomUUID().replace(/-/g, "")}`;
}

// Add the ID to the request
export function useRequestId(req: Request, res: Response, next: NextFunction) {
    const id = useId();
    req.id = id;
    res.setHeader("X-Request-Id", id);
    next();
}

// Extend Express Request
declare global {
    namespace Express {
        interface Request {
            id: string;
        }
    }
}
