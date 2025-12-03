import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "Online", service: "hub-core" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`hub-core services rodando na porta: ${PORT}`);
});
