import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hola, sean bienvenidos a este maravilloso TP");
});

app.get('/hora', (req, res) => {
    const now = new Date();
    const time = now.toLocaleTimeString('es-ES', { hour12: false });
    res.send(time);
});

app.get('/fecha-completa', (req, res) => {
    const now = new Date();
    const datePart = now.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const timePart = now.toLocaleTimeString('es-ES', { hour12: false });
    res.send(`${datePart}, ${timePart}`);
});

export default app;