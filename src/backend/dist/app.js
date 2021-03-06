"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const routes_1 = require("./routes");
const moduleRoutes_1 = require("./routes/module/moduleRoutes");
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(compression_1.default({
    filter: (request, response) => {
        if (request.headers['x-no-compression']) {
            return false;
        }
        return compression_1.default.filter(request, response);
    }
}));
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use("/", routes_1.router);
app.use("/module", moduleRoutes_1.moduleRouter);
