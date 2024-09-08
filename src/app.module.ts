import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getdataSourceConfig } from '../config/typeorm-datasource';
import { StudentModule } from './modules/student/student.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        ...getdataSourceConfig(),
        host: configService.get<any>('DATABASE_HOST'),
        entities: [join(__dirname, '/src/modules/**/*.entity{.ts,.js}')],
        migrations: [join(__dirname, '/src/migrations/**/*{.ts,.js}')],
        synchronize: false,
        autoLoadEntities: true,
        migrationsRun: false,
        logging: true,
        cli: {
          migrationsDir: join(__dirname, '/migrations'),
        },
      }),
      inject: [ConfigService],
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
