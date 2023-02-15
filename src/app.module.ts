import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  //2. connect mongodb
  imports: [MongooseModule.forRoot('mongodb://localhost/julianbackend')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
