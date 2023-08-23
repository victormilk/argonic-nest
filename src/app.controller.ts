import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly health: HealthCheckService,
  ) {}

  @Get('health')
  @HealthCheck()
  check(): Promise<any> {
    return this.health.check([]);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
