"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRepositoryToken(entity) {
    return `${entity.name.toUpperCase()}_PROVIDER`;
}
exports.getRepositoryToken = getRepositoryToken;
function getConnectionToken(conn) {
    return `SEQUELIZE_PROVIDER_${conn.toUpperCase()}`;
}
exports.getConnectionToken = getConnectionToken;
