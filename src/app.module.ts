import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // 👈 Importamos el nuevo controller
import { GreenhouseModule } from './greenhouse/greenhouse.module';

@Module({
  imports: [GreenhouseModule],
  controllers: [AppController], // 👈 Lo registramos
})
export class AppModule {}
