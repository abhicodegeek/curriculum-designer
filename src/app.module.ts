import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppLogger } from './common/utils/logger.service';
import { MocModule } from './modules/moc/moc.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MocModule,
    MongooseModule.forRoot(
      'mongodb+srv://abhisheksrungeri:1wBnKdyzf4yMHmYz@cluster0.tbysx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService, AppLogger],
  exports: [AppLogger],
})
export class AppModule {}
