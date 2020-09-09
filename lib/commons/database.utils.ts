export function getRepositoryToken(entity): string {
  return `${entity.name.toUpperCase()}_PROVIDER`
}

export function getConnectionToken(conn: string): string {
  return `SEQUELIZE_PROVIDER_${conn.toUpperCase()}`
}