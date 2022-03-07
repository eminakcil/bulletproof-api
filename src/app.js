import express from "express";
import helmet from "helmet";
import config from "./config";
import loaders from "./loaders";

import apiRoutes from "./api-routes";

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
