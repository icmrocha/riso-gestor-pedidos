require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Servidor RISO rodando!");
});

// Escuta na porta configurada
app.listen(port, () => {
  console.log('Servidor rodando em http://localhost:${port}');
});

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Teste de conexão com o banco
app.get("/api/teste", async (req, res) => {
  const { data, error } = await supabase.from("mesas").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});