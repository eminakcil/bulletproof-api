import express from "express";
import helmet from "helmet";
import config from "./config";
import loaders from "./loaders";

import apiRoutes from "./api-routes";
import path from "path";
import ApiError from "./errors/ApiError";

config();
loaders();

const app = express();

app.use(express.json());
app.use(helmet());

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Sunucu ayağa kalktı. (port=${PORT})`);
  app.use("/api", apiRoutes);

  app.use(express.static(path.join("src", "client", "dist")));
  app.use(express.static("public"));

  //404 handler
  app.use((req, res, next) => {
    next(new ApiError("not found", 404));
  });

  // Error Handler
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message || "internal server error",
      },
    });
  });
});
