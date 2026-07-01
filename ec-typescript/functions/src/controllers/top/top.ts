import { Request, Response } from "express";
export const sendMessage = async (req: Request, res: Response) => {
  res.json({ message: "hi" });
};
