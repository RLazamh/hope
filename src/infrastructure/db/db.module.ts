import { DatabaseService } from '@deuna/tl-shared-nd';
import { Module } from '@nestjs/common';
import { CustomerDBService } from './customer/customer-db.service';

@Module({
  providers: [DatabaseService, CustomerDBService],
})
export class DatabaseModule {}
