import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get("/health", (req, res) => {
    res.json({status: "Online"});
})

app.listen(PORT, () => {
    console.log(`Integration service rodando na porta ${PORT}`);
} )