import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@Injectable()
export class GreenhouseGateway {
  @WebSocketServer()
  server!: Server;

  handleSensorData(data: any) {
    this.server.emit('sensor-data', data);
  }
}
