import { Router } from "express";
import type { Request, Response } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.sendFile("index.html");
});

export default routes;
