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
exports.OrmModule = void 0;
const typeorm_1 = require("typeorm");
const baseModel_1 = require("./baseModel");
const question_1 = require("./question");
let OrmModule = class OrmModule extends baseModel_1.BaseModel {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrmModule.prototype, "number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrmModule.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => question_1.OrmQuestion, question => question.module, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true
    }),
    __metadata("design:type", Array)
], OrmModule.prototype, "questions", void 0);
OrmModule = __decorate([
    typeorm_1.Entity("modules")
], OrmModule);
exports.OrmModule = OrmModule;
