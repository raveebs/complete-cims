import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlatformDocument } from './schemas/platform.schema';

@Injectable()
export class PlatformService {
  @InjectModel('Platform')
  private readonly platformModel: Model<PlatformDocument>;

  async findOne() {
    const platform = await this.platformModel.findOne({});
    return platform;
  }
}
