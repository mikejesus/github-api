import express from "express";
import "express-async-errors";
import compression from "compression";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler";
import NotFoundError from "./utils/errors/not-found-error";
import router from "./routes";
import swaggerDocs from "./utils/swagger";
import { APP_PORT } from "./config/config";

//Express app
const app = express();

//Register compression middleware
app.use(compression());

//Register json body parser middleware
app.use(express.json());


//Register morgan for logging request middleware
app.use(morgan("dev"));

//Swagger docs 
swaggerDocs(app, Number(APP_PORT))

//Router
app.use("/api/v1/github/repo/info", router);


//Handle not found error middleware
app.use("*", (req, res) => {
  throw new NotFoundError(`${req.method} ${req.originalUrl}`);
});

//Register global error handler middleware
app.use(errorHandler);


//Export express app
export default app;
