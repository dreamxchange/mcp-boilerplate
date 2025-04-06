![MCP Banner](https://i.ibb.co/d0cG67tQ/50285e3b-0c05-4412-82ee-ec30e4b77bc8-2.webp)

# 🚀 MCP Boilerplate

_Powered by Bun ⚡_

**A modern, lightning-fast boilerplate for Model Context Protocol (MCP)
applications**

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Bun](https://img.shields.io/badge/Bun-1.0+-black?logo=bun&logoColor=white)](https://bun.sh)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

---
## 🔥 Features

- **Blazing-fast MCP** with Bun
- Modern TypeScript-first architecture
- MCP SDK integration out-of-the-box (`@modelcontextprotocol/sdk`)
- Express 5.x server with proper TypeScript support
- Robust validation using Zod schemas
- Smart logging with Morgan
- Environment configuration support
- CLI-ready implementation
---

## 🛠️ Prerequisites

- [Bun 1.0+](https://bun.sh) **or** [Node.js 20+](https://nodejs.org)
- Package manager (`bun`, `npm`, `pnpm`, or `yarn`)

---
## ⚡ Quick Start

```bash
# Clone repository
git clone https://github.com/jhon2c/mcp-boilerplate.git
cd mcp-boilerplate

# Install dependencies (with Bun) [Recommended]
bun install

# OR with npm
npm install

# Start development server
bun run dev
```
---

## 🚄 Development Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `bun run dev`     | Start dev server with hot reload |
| `bun run build`   | Compile TypeScript               |
| `mcp-boilerplate` | Run compiled CLI                 |

---

## 🌐 Environment Setup

Create .env file:

```env
PORT=3000 
MCP_API_KEY=your_api_key_here
DEBUG=mcp:*
```

---
## ✨ Setup the MCP server on Cursor

1. Install and run the server
2. Go to Cursor MCP Settings
``Files > Preferences > Cursor Settings > MCP``
3. Add a new MCP server
``+ Add new global MCP server``
4. Paste the setup JSON
```json
{
    "mcpServers": {
        "mcp-boilerplate": {
            "url": "http://localhost:3001/sse"
        }
    }
}
```
---

## 📂 Project Structure

```
mcp-boilerplate/
├── src/
│ ├── index.ts
│ ├── config/
│ ├── services/
│ └── types/
└── build/
```

---

## 📦 Key Dependencies

**Runtime:**

- [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk)
- [express@5](https://expressjs.com/)
- [zod](https://zod.dev/)
- [ky](https://github.com/sindresorhus/ky)

**Dev:**

- [tsx](https://tsx.is/)

---

## 🤝 Contributing Fork repo

1. Create feature branch
2. Commit changes
3. Push branch
4. Open PR

📄 License MIT - See LICENSE

_Happy Coding!_
