"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenhouseService = void 0;
const common_1 = require("@nestjs/common");
let GreenhouseService = class GreenhouseService {
    generateFakeSensorData() {
        return {
            timestamp: new Date().toISOString(),
            temperature: this.randomFloat(20, 35),
            humidity: this.randomFloat(40, 80),
            soilMoisture: this.randomFloat(20, 60),
            co2: this.randomInt(350, 1000)
        };
    }
    randomFloat(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
exports.GreenhouseService = GreenhouseService;
exports.GreenhouseService = GreenhouseService = __decorate([
    (0, common_1.Injectable)()
], GreenhouseService);
//# sourceMappingURL=greenhouse.service.js.map