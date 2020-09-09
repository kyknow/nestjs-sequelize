import { CONNECTION_PROVIDER, DATABASE_MODULE_OPTIONS } from '../database.constants'
import { Sequelize } from 'sequelize-typescript'
import { DatabaseModuleAsyncOptions, DatabaseModuleOptions } from '../database.interface';
import { isArray } from 'util';

export function createConnection() {
  return {
    provide: CONNECTION_PROVIDER,
    useFactory: (options: DatabaseModuleOptions | DatabaseModuleOptions[]): Map<string, Sequelize> => {
      const map = new Map<string, Sequelize>()
      if (!options) {
        options = {
          connName: 'test',
          database: 'test',
          dialect: 'sqlite',
          username: 'root',
          password: '',
          storage: ':memory:',
        }
        map.set(options.connName, new Sequelize(options))
      } else {
        if(isArray(options)) {
          for(const o of options) {
            map.set(o.connName, new Sequelize(o))
          }
        } else {
          map.set(options.connName, new Sequelize(options))
        }
      }
      console.log('map: ', map);
      return map
    },
    inject: [DATABASE_MODULE_OPTIONS]
  }
}

export const createAsyncConnection = (options: DatabaseModuleAsyncOptions) => {
  return {
    provide: DATABASE_MODULE_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject,
  }
}
