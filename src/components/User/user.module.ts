import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/models/user.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: User }])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
