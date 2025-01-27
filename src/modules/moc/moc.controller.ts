import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MocService } from './moc.service';
import { Moc } from 'src/schemas/moc.schema';
import { CreateMocDto } from './dto/create-moc.dto';

@Controller('moc')
export class MocController {
  constructor(private readonly mocService: MocService) {}

  @Post('create')
  async createMoc(@Body() createMocDto: CreateMocDto): Promise<Moc> {
    return this.mocService.createMoc(createMocDto.message);
  }

  @Get()
  async getAllMocs(): Promise<Moc[]> {
    return this.mocService.getMocs();
  }

  @Put('update/:id')
  async updateMoc(
    @Param('id') id: string,
    @Body('message') message: string,
  ): Promise<Moc | null> {
    const updatedMoc = await this.mocService.updateMoc(id, message);
    if (!updatedMoc) {
      // Handle case when the MOC was not found and return null or throw an exception
      return null;
    }
    return updatedMoc;
  }

  @Delete('delete/:id')
  async deleteMoc(@Param('id') id: string): Promise<{ message: string }> {
    await this.mocService.deleteMoc(id);
    return { message: 'Moc deleted successfully' }; // Provide a response message
  }
}
