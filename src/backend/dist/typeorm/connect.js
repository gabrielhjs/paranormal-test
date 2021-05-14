"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConnection = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ormconfig_1 = __importDefault(require("../ormconfig"));
exports.typeormConnection = {
    async create(connectionName) {
        const connection = ormconfig_1.default.find(connection => connection.name === connectionName);
        if (connection !== undefined) {
            typeorm_1.createConnection(connection).then(() => {
                console.log(`Postgres connection: (${connectionName}) is connected`);
            });
        }
    },
    async close(connectionName) {
        typeorm_1.getConnection(connectionName).close().then(() => {
            console.log(`Postgres connection: (${connectionName}) is disconnected`);
        });
    },
    async clear(connectionName) {
        const connection = typeorm_1.getConnection(connectionName);
        const entities = connection.entityMetadatas;
        entities.forEach(async (entity) => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName}`);
        });
    },
};
