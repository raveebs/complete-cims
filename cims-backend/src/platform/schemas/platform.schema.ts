import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Platform {
  @Prop()
  admin: string;
}

export type PlatformDocument = Platform & Document;
export const PlatformSchema = SchemaFactory.createForClass(Platform);
