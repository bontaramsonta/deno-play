// @deno-types="npm:@types/express@4.17.15"
import express, { Router } from "npm:express@4.18.2";

const router: Router = express.Router();

router.get("/", (_req, res) => {
  res.send("Hello by express! app");
});

export { router as appRouter };
