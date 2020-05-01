import { Request, Response } from "express";
import { Op } from "sequelize";
const bcrypt = require("bcrypt");

import { User, UserInterface } from "../../database/models/user";
import { generateTokens, verifyToken } from "../../utils";

interface IUserCreateMessage {
  message?: string;
  error?: string;
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

const getUsersList = (req: Request, res: Response) => {
  User.findAll<User>({})
    .then((users: Array<User>) => {
      const usersList = users.map((el) => el.name);
      res.send({
        users: usersList,
      });
    })
    .catch((error: Error) => res.status(500).send({ error }));
};

const getUser = (req: Request, res: Response) => {
  const token = req.cookies.authToken;
  const id = +req.params.id;
  const tokenData = verifyToken(token);

  if (tokenData.isValid && tokenData.data.id === id) {
    User.findByPk<User>(id)
      .then((user: User | null) => {
        if (user) {
          const { id, name, email, createdAt } = user;
          res.send({
            id,
            name,
            email,
            createdAt,
          });
        } else {
          res.status(404).send({
            error: req.t("user.userNotFound"),
          });
        }
      })
      .catch((error: Error) => res.status(500).json({ error }));
  } else {
    res.status(404).send({
      error: req.t("user.userNotAuthenticated"),
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const response: IUserLoginResponse = await User.findOne({
    where: {
      [Op.or]: [{ name: name || "" }, { email: email || "" }],
    },
  })
    .then(async (data) => {
      if (!data) {
        return {
          authorized: false,
          error: req.t("user.userNotExist"),
        };
      }

      const isPasswordValid = await bcrypt.compare(password, data.password);

      if (!isPasswordValid) {
        return {
          authorized: false,
          error: req.t("user.passwordInvalid"),
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
        message: req.t("user.loginSuccess"),
        data: {
          id: data.id,
          name: data.name,
          email: data.email,
          role: "user",
        },
      };
    })
    .catch((err) => {
      return {
        authorized: false,
        error: req.t("user.userNotAuthorized"),
      };
    });

  if (!response.authorized) {
    return res.status(401).send(response);
  } else {
    return res.status(200).send(response);
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
      if (!data) return;

      const userMessage: IUserCreateMessage = {
        error: null,
      };

      const userParams: IUserParams = {
        name,
        email,
      };

      const dbProps: IUserParams = {
        name: data.name,
        email: data.email,
      };

      const valueName =
        dbProps.name === userParams.name && `name ${dbProps.name}`;
      const valueEmail =
        dbProps.email === userParams.email && `email ${dbProps.email}`;
      const allValues =
        valueName && valueEmail && `${valueName}, ${valueEmail}`;
      const singleValue = valueName ? valueName : valueEmail;
      const formattedValue = allValues || singleValue;

      userMessage.error = req.t("user.userAlreadyExist", {
        value: formattedValue,
      });

      return userMessage;
    })
    .catch((e) => {
      return null;
    });

  if (userMsg && userMsg.error) {
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
        message: req.t("user.userCreated"),
        data: {
          id: createdUser.id,
          name: createdUser.name,
          email: createdUser.email,
        },
      });
    })
    .catch((error: Error) => res.status(500).send({ error }));
};

export { getUsersList, getUser, loginUser, createUser };
