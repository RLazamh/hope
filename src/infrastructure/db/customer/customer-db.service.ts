import { Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DatabaseService } from '@deuna/tl-shared-nd';
import { configMigrate } from '../config/db.orm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerDBService implements OnModuleInit {
  private customerRepository: Repository<Customer>;

  constructor(private dbService: DatabaseService) {}

  async onModuleInit() {
    await this.dbService.init(configMigrate, process.env.POSTGRES_DB);
    this.customerRepository = this.dbService.getRepository(Customer);
  }

  async findCustomerByNui(id: string): Promise<Customer> {
    return this.customerRepository.findOne({ id });
  }
}
