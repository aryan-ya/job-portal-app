import express, { Router } from "express";
import { login, register, updateProfile } from "../controller/user.controller";
const router = express.Router();

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/profile/update").post(updateProfile);