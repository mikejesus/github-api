import { APP_PORT } from "./config/config";
import app from "./app";


const server = app.listen(APP_PORT, async () => {

    console.log("Listening on port", APP_PORT);
});
process.on("SIGTERM", () => {
    console.log("SIGTERM received");

    server.close(() => {
        console.log("Server closed");
    });
});

process.on("uncaughtException", (err) => {
    console.error(err.stack);

    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.error(err);
    process.exit(1);
});
