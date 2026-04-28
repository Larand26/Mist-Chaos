import express from "express";
import routes from "./routes/index.js";
import path from "node:path";

class App {
  server: express.Express;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.static(path.resolve(process.cwd(), "public")));
  }

  routes() {
    this.server.use(routes);
  }
}

export default App;
