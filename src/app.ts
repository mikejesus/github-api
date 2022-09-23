import express from "express";
import "express-async-errors";
import compression from "compression";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error-handler";
import NotFoundError from "./utils/errors/not-found-error";
import router from "./routes";
import swaggerDocs from "./utils/swagger";
import { APP_PORT } from "./config/config";


const app = express();

app.use(compression());

app.use(express.json());

app.use(morgan("dev"));

swaggerDocs(app, Number(APP_PORT))


app.use("/api/v1/github/repo/info", router);

app.use("*", (req, res) => {
  throw new NotFoundError(`${req.method} ${req.originalUrl}`);
});

app.use(errorHandler);

export default app;
