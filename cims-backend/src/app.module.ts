import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

// const mongoose = () => {
//   return `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
// };

const config = () => {
  return { envFilePath: 'config.env' };
};

const mongoose = () => {
  return `${process.env.DATABASE_LOCAL}`;
};

@Module({
  imports: [
    ConfigModule.forRoot(config()),
    MongooseModule.forRoot(mongoose()),
    AuthModule,
    UserModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
