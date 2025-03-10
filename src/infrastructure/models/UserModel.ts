// src/infrastructure/models/UserModel.ts
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  _id: number;
  pseudo: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
}

const UserSchema: Schema = new Schema({
  _id: { type: Number, required: true }, // ID numérique au lieu d'un ObjectId
  pseudo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  gender: { type: String, required: true },
});

const UserModel = mongoose.model<IUser>("User", UserSchema);
export { UserModel, IUser };
