
import { Inject } from '@nestjs/common'
import { getRepositoryToken, getConnectionToken} from './database.utils'

export const InjectRepository = (entity) => {
  return Inject(getRepositoryToken(entity))
}

export const InjectSequelize = (conn: string) => {
  return Inject(getConnectionToken(conn))
}