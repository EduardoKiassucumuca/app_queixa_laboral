const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { generateKey } = require("crypto");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "edkiassu",
    database: "bd_queixa_laboral",
})


app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { sobrenome } = req.body;
    const { bairro } = req.body;
    const { rua } = req.body;
    const { estado_civil } = req.body;
    const { BI } = req.body;
    const { data_nascimento } = req.body;
    const contacto = '997234422';
    const genero = "Masculino"

    let sql = "INSERT INTO Trabalhador(nome,sobrenome,estado_civil,nBI,data_nascimento,contacto,genero)VALUES(?,?,?,?,?,?,?)";
    db.query(sql, [nome, sobrenome, estado_civil, BI, data_nascimento, contacto, genero], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Rodando Servidor");
});