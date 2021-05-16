"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleRouter = void 0;
const express_1 = require("express");
const getModules_1 = require("./getModules");
const moduleRouter = express_1.Router();
exports.moduleRouter = moduleRouter;
moduleRouter.get("/", (request, response) => {
    return getModules_1.getModuleController.handle(request, response);
});
