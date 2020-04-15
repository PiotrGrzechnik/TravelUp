import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const { DATABASE, DATABASE_USER, DATABASE_PASSWORD } = process.env;

const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  dialect: "postgres",
});

export default sequelize;
