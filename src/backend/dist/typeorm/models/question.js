"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmQuestion = void 0;
const typeorm_1 = require("typeorm");
const module_1 = require("../../entities/module");
const baseModel_1 = require("./baseModel");
const module_2 = require("./module");
const option_1 = require("./option");
let OrmQuestion = class OrmQuestion extends baseModel_1.BaseModel {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrmQuestion.prototype, "number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrmQuestion.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => option_1.OrmOption, product => product.question, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true
    }),
    __metadata("design:type", Array)
], OrmQuestion.prototype, "options", void 0);
__decorate([
    typeorm_1.ManyToOne(() => module_2.OrmModule, module => module.questions),
    typeorm_1.JoinColumn(),
    __metadata("design:type", module_1.Module)
], OrmQuestion.prototype, "module", void 0);
OrmQuestion = __decorate([
    typeorm_1.Entity("questions")
], OrmQuestion);
exports.OrmQuestion = OrmQuestion;
