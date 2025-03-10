// src/interface/middleware/auth.ts
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token)  {
    res.sendStatus(401);
    return
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) { 
      res.sendStatus(403);
      return
    }
    req.user = user;
    next();
  });
}
