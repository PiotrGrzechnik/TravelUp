import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
  res.send("<h1>USER</h1>");
};

const getSpecificUser = (req: Request, res: Response) => {
  const params = req.params.id;
  res.send(`<h1>USER ${params}</h1>`);
};

export { getUser, getSpecificUser };
