import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';

const curriculoModel = database.define(
  'curriculo',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    idade: {
      type: INTEGER,
      allowNull: false,
    },
    curso: {
      type: STRING,
      allowNull: true,
    },
  }
);
export {curriculoModel}