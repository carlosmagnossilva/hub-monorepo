import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Online" });
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Empresa1-SGO rodando na porta ${PORT}`);
});