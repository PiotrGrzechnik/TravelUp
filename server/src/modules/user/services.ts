import { Request, Response } from "express";
import { User, UserInterface } from "../../database/models/user";

const getUsers = (req: Request, res: Response) => {
  User.findAll<User>({})
    .then((users: Array<User>) => {
      res.send(users);
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

const createUser = (req: Request, res: Response) => {
  const params: UserInterface = req.body;

  User.create<User>(params)
    .then((user: User) => {
      res.status(201).send(user);
    })
    .catch((err: Error) => res.status(500).send(err));
};

export { getUsers, getSpecificUser, createUser };
