import { Request } from "express";

declare module "express" {
  export interface Request {
    user?: any; // Remplace `any` par un type plus précis si possible
  }
}