import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/db/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class HopeModule {}
