import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import sequelize from "../";

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public pass!: string;
  public readonly createdAt!: Date;
}

export interface UserInterface {
  name: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    pass: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize: sequelize,
  }
);

User.sync({ force: false }).then((v) =>
  console.log(
    "\x1b[35m%s\x1b[0m",
    `[DB] ${v.toString().split(" ")[1]} table synced`
  )
);
