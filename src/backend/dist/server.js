"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = require("./typeorm/connect");
const app_1 = require("./app");
dotenv_1.default.config();
connect_1.typeormConnection.create(process.env.NODE_ENV || "default");
app_1.app.use(cors_1.default());
app_1.app.listen(3333);
