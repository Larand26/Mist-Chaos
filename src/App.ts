import express from "express";
import routes from "./routes/index.js";

class App {
  server: express.Express;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.static("public"));
  }

  routes() {
    this.server.use(routes);
  }
}

export default App;
