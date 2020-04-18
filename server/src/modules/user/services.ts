import { Request, Response } from "express";
import { Op } from "sequelize";
const bcrypt = require("bcrypt");

import { User, UserInterface } from "../../database/models/user";
import { generateToken } from "../../utils";

interface IUserMessage {
  exist: boolean;
  message: string[];
}

interface IUserParams {
  [key: string]: string;
}

const getUsers = (req: Request, res: Response) => {
  console.log(req.headers);
  User.findAll<User>({})
    .then((users: Array<User>) => {
      const usersList = users.map((el) => el.name);
      res.send(usersList);
    })
    .catch((err: Error) => res.status(500).send(err));
};

const getSpecificUser = (req: Request, res: Response) => {
  const id = req.params.id;

  User.findByPk<User>(id)
    .then((user: User | null) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ errors: ["User not found"] });
      }
    })
    .catch((err: Error) => res.status(500).json(err));
};

const loginUser = () => {};

const createUser = async (req: Request, res: Response) => {
  const params: UserInterface = req.body;
  const { name, email, password } = params;

  const userMsg: IUserMessage = await User.findOne({
    where: {
      [Op.or]: [{ name: name }, { email: email }],
    },
  })
    .then((data) => {
      const userMessage: IUserMessage = {
        exist: !!data,
        message: [],
      };

      if (data) {
        const userParams: IUserParams = { name, email };
        const dbProps = [
          { key: "name", value: data.name },
          { key: "email", value: data.email },
        ];

        dbProps.forEach((el) => {
          if (el.value === userParams[el.key]) {
            userMessage.message.push(
              `User with ${el.key} ${el.value} already exist`
            );
          }
        });
      }

      return userMessage;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });

  if (userMsg.exist) {
    return res.status(400).send(userMsg);
  }

  const passwordHashed = await bcrypt.hash(password, 10);

  const newUser = {
    name: name,
    email: email,
    password: passwordHashed,
  };

  User.create<User>(newUser)
    .then((createdUser: User) => {
      const token = generateToken({
        id: createdUser.id,
        name: createdUser.name,
      });

      res.status(201).header("x-auth-token", token).send({
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
      });
    })
    .catch((err: Error) => res.status(500).send(err));
};

export { getUsers, getSpecificUser, loginUser, createUser };
