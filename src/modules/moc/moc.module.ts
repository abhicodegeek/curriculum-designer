import { Module } from '@nestjs/common';
import { MocService } from './moc.service';
import { MocController } from './moc.controller';
import { AppLogger } from 'src/common/utils/logger.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Moc, MocSchema } from 'src/schemas/moc.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Moc, schema: MocSchema }]), // Register Moc model with the schema
  ],
  providers: [MocService, AppLogger],
  controllers: [MocController],
})
export class MocModule {}
