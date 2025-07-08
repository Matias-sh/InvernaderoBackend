import { Injectable } from '@nestjs/common';

@Injectable()
export class GreenhouseService {
  generateFakeSensorData() {
    return {
      timestamp: new Date().toISOString(),
      temperature: this.randomFloat(20, 35),
      humidity: this.randomFloat(40, 80),
      soilMoisture: this.randomFloat(20, 60),
      co2: this.randomInt(350, 1000)
    };
  }

  private randomFloat(min: number, max: number) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  private randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
