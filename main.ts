// @deno-types="npm:@types/express@4.17.15"
import express, { Application, Request, Response } from "npm:express@4.18.2";
import { appRouter } from "./app.ts";

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Dinosaur API!");
});

app.use("/api", appRouter);

app.listen(8000, () => console.log("Server running on port 8000"));
