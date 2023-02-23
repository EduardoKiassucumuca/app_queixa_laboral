import { Sequelize } from "sequelize";
import db from "../config/database";

const { DataTypes } = Sequelize;

const Users = db.define('utilizador', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true
});

(async() => {
    await db.sync();
})();

export default utilizador;