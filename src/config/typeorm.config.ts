import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 7000,
  username: 'admin',
  password: 'admin',
  database: 'tasks',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
