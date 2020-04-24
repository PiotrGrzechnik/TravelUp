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
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
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

export { User, UserInterface };
