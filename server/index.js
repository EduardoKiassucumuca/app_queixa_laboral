const express = require("express");
const app = express();
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "edkiassu",
    database: "bd_queixa_laboral",
})

app.get('/', (req, res) => {
    let sql = "INSERT INTO Trabalhador(nome,sobrenome,estado_civil,nBI,data_nascimento,contacto,genero)VALUES('Eduardo','Kiassucumuca','S','09','2022-12-12','930340539','Masculino')";
    db.query(sql, (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Rodando Servidor");
});