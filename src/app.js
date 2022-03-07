import express from "express";
import helmet from "helmet";
import config from "./config/index.js";
import loaders from "./loaders/index.js";

import apiRoutes from "./api-routes/index.js";

config();
loaders();

const app = express();

app.use(express.json());
app.use(helmet());

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Sunucu ayağa kalktı. (port=${PORT})`);
  app.use("/api", apiRoutes);
});
