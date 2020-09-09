import { CONNECTION_PROVIDER } from '../database.constants'
import { Sequelize } from 'sequelize-typescript'
import { getRepositoryToken, getConnectionToken } from '../commons/database.utils'

export const createDatebaseProviders = (entities: any, connection: string, sync = false) => {
  const provider = {
    provide: getConnectionToken(connection),
    useFactory: async (conns: Map<string, Sequelize>) => {
      const sequelize: Sequelize = conns.get(connection)
      sequelize.addModels(entities)
      if (sync) {
        sequelize.sync()
      }
      return sequelize
    },
    inject: [CONNECTION_PROVIDER],
  }
  return provider
}

export const createModelProviders = (entities: any) => {
  const providers = []
  for (const e of entities) {
    providers.push({
      provide: getRepositoryToken(e),
      useValue: e,
    })
  }
  return providers
}