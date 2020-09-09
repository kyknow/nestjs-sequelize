"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_utils_1 = require("./database.utils");
exports.InjectRepository = (entity) => {
    return common_1.Inject(database_utils_1.getRepositoryToken(entity));
};
exports.InjectSequelize = (conn) => {
    return common_1.Inject(database_utils_1.getConnectionToken(conn));
};
