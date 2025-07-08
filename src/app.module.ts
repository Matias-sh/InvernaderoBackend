import { Module } from '@nestjs/common';
import { GreenhouseModule } from './greenhouse/greenhouse.module';

@Module({
  imports: [GreenhouseModule],
})
export class AppModule {}
