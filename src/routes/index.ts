import { Router } from "express";
import type { Request, Response } from "express";
import path from "node:path";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(process.cwd(), "public", "index.html"));
});

export default routes;
