import { ConfigService } from '@nestjs/config';
import { CustomLogger } from '../src/common/customerLogger';
import { DataSource } from 'typeorm';
const rootDir = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
const configService = new ConfigService();
const customLogger = new CustomLogger();
export const getdataSourceConfig = () => {
  customLogger.log(configService.get<any>('DATABASE_HOST', 'localhost'));
  customLogger.log(configService.get<any>('DATABASE_TYPE', 'postgres'));
  customLogger.log(configService.get<any>('DATABASE_PORT', 5432));
  customLogger.log(configService.get<any>('DATABASE_USER', 'abdulmuizzkhan'));
  customLogger.log(configService.get<any>('DATABASE_PASSWORD', 'postgres'));
  customLogger.log(configService.get<any>('DATABASE_NAME', 'springdatajpa'));
  customLogger.log(
    `Entities directory: ${rootDir + '/modules/**/*.entity.{ts,js}'}`,
  );
  customLogger.log(
    `Migrations directory: ${rootDir + '/migrations/**/*.{ts,js}'}`,
  );
  return {
    host: configService.get<any>('DATABASE_HOST', 'localhost'),
    type: configService.get<any>('DATABASE_TYPE', 'postgres'),
    port: configService.get<any>('DATABASE_PORT', 5432),
    username: configService.get<any>('DATABASE_USER', 'abdulmuizzkhan'),
    password: configService.get<any>('DATABASE_PASSWORD', 'postgres'),
    database: configService.get<any>('DATABASE_NAME', 'springdatajpa'),
    entities: [
      rootDir +
        configService.get<any>('ENTITIES', '/modules/**/*.entity.{ts,js}'),
    ],
    migrations: [
      rootDir +
        configService.get<any>('MIGRATIONS_PATH', '**/migrations/*.{ts,js}'),
    ],
    cli: {
      migrationsDir: '**/migrations/*.{ts,js}',
    },
    logging: false,
    synchronize: false,
  };
};
const dataSource = new DataSource(getdataSourceConfig() as any);
export default dataSource;
