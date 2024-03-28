import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Bebida = sequelize.define('Bebida', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    abv: {
        type: DataTypes.FLOAT
    },
    tipo: {
        type: DataTypes.STRING
    },
    nacionalidade: {
        type: DataTypes.STRING
    }
}, { tableName: "Bebida"})

export { Bebida }