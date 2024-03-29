import { Module } from '@nestjs/common';
import { DebtsController } from './debts.controller';
import { DebtsService } from './debts.service';

@Module({
  controllers: [DebtsController],
  providers: [DebtsService]
})
export class DebtsModule {}
