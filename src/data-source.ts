import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import path from 'path'

const DataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}')
    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}')

    const baseUrl: string | undefined = process.env.DATABASE_URL

    if(!baseUrl){
        throw new Error('Missing env var: "DATABASE_URL"')
    }
    return {
        type: 'postgres',
        url: baseUrl,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

export const AppDataSource: DataSource = new DataSource(DataSourceConfig())