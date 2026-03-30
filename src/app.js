import express from "express";
import { getCurrentTime } from "./time.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Servidor de hora actual con Express");
});
app.get("/hora", (req, res) => {
  const time = getCurrentTime();
  res.json({ hora: time.hhmmss });
});
app.get("/hora/local", (req, res) => {
  const time = getCurrentTime();
  res.json({ horaLocal: time.locale });
});

export default app;
