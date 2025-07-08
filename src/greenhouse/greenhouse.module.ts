import { Module } from '@nestjs/common';
import { GreenhouseGateway } from './greenhouse.gateway';
import { GreenhouseService } from './greenhouse.service';

@Module({
  providers: [GreenhouseGateway, GreenhouseService],
})
export class GreenhouseModule {}
