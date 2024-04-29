import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type ConnectionOptions = PostgresConnectionOptions &
  TypeOrmModuleOptions & { seeds: string[] };

export const bpDataProviderConfig = (migrate = false): ConnectionOptions => ({
  type: 'postgres',
  name: 'bp-data-provider',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_BP_DATA_PROVIDER_USERNAME,
  password: process.env.TYPEORM_BP_DATA_PROVIDER_PASSWORD,
  database: process.env.TYPEORM_BP_DATA_PROVIDER_DATABASE,
  synchronize: false,
  migrationsRun: migrate,
  logging: true,
  entities: [__dirname + '/../db/**/*.entity.[tj]s'],
  migrations: [__dirname + '/../db/migration/**/*.[tj]s'],
  seeds: [__dirname + '/../db/seeds/**/*.[tj]s'],
  cli: {
    migrationsDir: '/../db/migration',
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  keepConnectionAlive: true,
});

export const config = bpDataProviderConfig();
export const configMigrate = bpDataProviderConfig(true);
