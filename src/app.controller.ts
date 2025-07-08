import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('status')
  getStatus(): string {
    return 'Greenhouse backend is running!';
  }
}
