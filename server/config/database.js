import { Sequelize } from "sequelize";

const db = new Sequelize('bd_queixa_laboral', 'root', 'edkiassu', {
    host: "localhost",
    dialect: "mysql"
});

export default db;