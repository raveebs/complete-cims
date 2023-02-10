import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatformService } from './platform.service';
import { PlatformSchema } from './schemas/platform.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Platform', schema: PlatformSchema }]),
  ],
  providers: [PlatformService],
  exports: [PlatformService],
})
export class PlatformModule {}
