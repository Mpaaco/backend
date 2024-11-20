//Importação da pasta
import express from "express";

//Variavél
const app = express();
app.listen(3000,() =>{
    console.log("Hello World");
});

//criação de rota

app.get("/api", (req, res)=>{
    res.status(200).send("Hello World");
});

//Abrir o servidor = localhost:3000/api//