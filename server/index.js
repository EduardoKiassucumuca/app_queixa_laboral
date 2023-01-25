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
var result_trabalhador = "";
var result_empregador = "";
app.post("/queixar", (req, res) => {

    const { nome } = req.body;
    const { sobrenome } = req.body;
    const { bairro } = req.body;
    const { rua } = req.body;
    const { estado_civil } = req.body;
    const { BI } = req.body;
    const { data_nascimento } = req.body;


    let sql_trabalhador = "INSERT INTO Trabalhador(nome,sobrenome,estado_civil,nBI,data_nascimento)VALUES(?,?,?,?,?)";
    db.query(sql_trabalhador, [nome, sobrenome, estado_civil, BI, data_nascimento], (err, result_trab) => {
        if (err) throw err;
        result_trabalhador = result_trab.insertId;
        console.log(result_trabalhador);
    });


    const { empresa } = req.body;
    const { provincia_empresa } = req.body;
    const { rua_empresa } = req.body;
    const { website_empresa } = req.body;
    const { email_empresa } = req.body;

    let sql_empregador = "INSERT INTO Empregador(nome_empresa,rua_empresa,provincia_empresa,email,website)VALUES(?,?,?,?,?)";
    var a = db.query(sql_empregador, [empresa, rua_empresa, provincia_empresa, email_empresa, website_empresa], (err, result_emprega) => {
        if (err) throw err;
        result_empregador = result_emprega.insertId;

    });

    const { descricao_queixa } = req.body;

    let sql_queixa = "INSERT INTO Queixa(fk_trabalhador,fk_empregador,descr_queixa)VALUES(?,?,?)";
    db.query(sql_queixa, [a.insertId, result_empregador, descricao_queixa], (err, result_queixa) => {
        console.log(err);
    });
    console.log(nome);
    console.log(empresa);
    console.log(descricao_queixa);
});

app.listen(3001, () => {
    console.log("Rodando Servidor");
});