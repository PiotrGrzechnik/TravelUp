import { Request, Response } from "express";
import { Op } from "sequelize";
const bcrypt = require("bcrypt");

import { User, UserInterface } from "../../database/models/user";
import { generateTokens } from "../../utils";

interface IUserCreateMessage {
  exist: boolean;
  message: string[];
}

interface IUserLoginResponse {
  authorized: boolean;
  tokens?: object;
  user?: object;
  error?: string;
}

interface IUserParams {
  [key: string]: string;
}

const getUsers = (req: Request, res: Response) => {
  User.findAll<User>({})
    .then((users: Array<User>) => {
      const usersList = users.map((el) => el.name);
      res.send({
        users: usersList,
      });
    })
    .catch((error: Error) => res.status(500).send({ error }));
};

const getSpecificUser = (req: Request, res: Response) => {
  const id = req.params.id;

  User.findByPk<User>(id)
    .then((user: User | null) => {
      if (user) {
        const { name, email, createdAt } = user;
        res.send({
          name,
          email,
          createdAt,
        });
      } else {
        res.status(404).send({
          error: "User not found",
        });
      }
    })
    .catch((error: Error) => res.status(500).json({ error }));
};

const loginUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const response: IUserLoginResponse = await User.findOne({
    where: {
      [Op.or]: [{ name: name }, { email: email }],
    },
  })
    .then(async (data) => {
      if (!data) {
        return {
          authorized: false,
          error: "User with this name or e-mail does not exist",
        };
      }

      const isPasswordValid = await bcrypt.compare(password, data.password);

      if (!isPasswordValid) {
        return {
          authorized: false,
          error: "Password is not valid",
        };
      }

      const tokens = generateTokens({
        id: data.id,
        name: data.name,
        role: "user",
      });

      return {
        authorized: true,
        tokens,
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          role: "user",
        },
      };
    })
    .catch((err) => ({
      authorized: false,
      error: err,
    }));

  if (!response.authorized) {
    return res.status(401).send(response);
  } else {
    return res.status(201).send(response);
  }
};

const createUser = async (req: Request, res: Response) => {
  const body: UserInterface = req.body;
  const { name, email, password } = body;

  const userMsg: IUserCreateMessage = await User.findOne({
    where: {
      [Op.or]: [{ name }, { email }],
    },
  })
    .then((data) => {
      const userMessage: IUserCreateMessage = {
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
      console.log("ERROR", e);
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
      res.status(201).send({
        message: "User was created",
        data: {
          id: createdUser.id,
          name: createdUser.name,
          email: createdUser.email,
        },
      });
    })
    .catch((error: Error) => res.status(500).send({ error }));
};

export { getUsers, getSpecificUser, loginUser, createUser };
