import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('findAll')
  findAll() {
    return 'test-lambda3';
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.testService.findOne(+id);
  // }
}
