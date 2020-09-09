"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_constants_1 = require("../database.constants");
const sequelize_typescript_1 = require("sequelize-typescript");
const util_1 = require("util");
function createConnection() {
    return {
        provide: database_constants_1.CONNECTION_PROVIDER,
        useFactory: (options) => {
            const map = new Map();
            if (!options) {
                options = {
                    connName: 'test',
                    database: 'test',
                    dialect: 'sqlite',
                    username: 'root',
                    password: '',
                    storage: ':memory:',
                };
                map.set(options.connName, new sequelize_typescript_1.Sequelize(options));
            }
            else {
                if (util_1.isArray(options)) {
                    for (const o of options) {
                        map.set(o.connName, new sequelize_typescript_1.Sequelize(o));
                    }
                }
                else {
                    map.set(options.connName, new sequelize_typescript_1.Sequelize(options));
                }
            }
            console.log('map: ', map);
            return map;
        },
        inject: [database_constants_1.DATABASE_MODULE_OPTIONS]
    };
}
exports.createConnection = createConnection;
exports.createAsyncConnection = (options) => {
    return {
        provide: database_constants_1.DATABASE_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject,
    };
};
