import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GreenhouseService } from './greenhouse.service';

@WebSocketGateway({ cors: true })
export class GreenhouseGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  constructor(private readonly greenhouseService: GreenhouseService) {}

  afterInit() {
    setInterval(() => {
      const data = this.greenhouseService.generateFakeSensorData();
      this.server.emit('sensorData', data);
    }, 10000);
  }
}
