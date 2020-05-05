import { Model, DataTypes } from "sequelize";
import sequelize from "../";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
}

interface UserInterface {
  name: string;
  email: string;
  password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(128),
      allowNull: true,
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

export { User, UserInterface };
