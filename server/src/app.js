import { createServer } from "http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const httpServer = createServer(app);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    withCredentials: true,
    exposedHeaders: ["Set-Cookie"],
  })
);

app.set("trust proxy", 1);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use((req, res, next) => {
  console.log("path: ", req.path);
  if (req.path.startsWith("/api/v1/users") || req.path == "/") {
    next();
  } else {
    verifyJWT(req, res, next);
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});

export { httpServer };
