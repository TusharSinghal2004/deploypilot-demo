const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "*";

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

app.get("/", (_req, res) => {
  res.json({ name: "deploypilot-demo-backend", status: "running" });
});

app.listen(PORT, () => {
  console.log(`backend listening on :${PORT} (cors origin: ${FRONTEND_URL})`);
});