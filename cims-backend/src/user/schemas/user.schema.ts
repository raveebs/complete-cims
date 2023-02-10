import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Roles from '@bluescape1/cims-core';

@Schema()
export class User {
  @Prop()
  fname: string;
  @Prop()
  lname: string;
  @Prop()
  email: string;
  @Prop()
  avatar: string;
  @Prop()
  status: string;
  @Prop()
  createdAt: Date;
  @Prop()
  password: string;
  @Prop()
  roles?: [Roles];
  // Todo : Created By
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
