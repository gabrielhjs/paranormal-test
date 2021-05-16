"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModuleController = void 0;
const getModulesController_1 = require("./getModulesController");
const getModulesUseCase_1 = require("./getModulesUseCase");
const getModulesUseCase = new getModulesUseCase_1.GetModulesUseCase();
const getModuleController = new getModulesController_1.GetModulesController(getModulesUseCase);
exports.getModuleController = getModuleController;
