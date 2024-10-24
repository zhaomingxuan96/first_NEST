import { Module } from '@nestjs/common';
import { CatsController } from './auth.controller';
import { CatsService } from './auth.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
