import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { randomBytes } from 'crypto';
import { Model } from 'mongoose';
import { invitationHTML } from 'src/templates/user-invitation-template';
import Roles from '@bluescape1/cims-core';
import { sendEmail } from 'src/util/email';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserProfileDto } from './dto/update-profile.dto';
import { UpdateUserStatusDto } from './dto/update-status.dto';
import { User } from './models/user.model';
import { UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  @InjectModel('User')
  private readonly userModel: Model<UserDocument>;

  private async findOrThrow(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) throw new NotFoundException();
    return user;
  }

  private convertToUser(
    id: string,
    fname: string,
    lname: string,
    email: string,
    avatar: string,
    status: string,
    createdAt: Date,
    roles?: [Roles],
  ): User {
    return { id, fname, lname, email, avatar, status, createdAt, roles };
  }

  async create(createUserDto: CreateUserDto) {
    console.log('Creating...');
    const temporaryPassword = randomBytes(32).toString('hex');
    const password = await hash(temporaryPassword, 12);
    const newUser = new this.userModel({ ...createUserDto, password });
    newUser.status = 'active';
    newUser.createdAt = new Date();
    const user = await newUser.save();
    await sendEmail({
      email: user.email,
      subject: 'You are invited',
      message: invitationHTML(
        user.fname,
        user.email,
        temporaryPassword,
        'Ravee',
      ),
    });

    return this.convertToUser(
      user._id,
      user.fname,
      user.lname,
      user.email,
      user.avatar,
      user.status,
      user.createdAt,
      user.roles,
    );
  }

  async findAll(status?: string) {
    let users: any;
    if (status) {
      users = await this.userModel.find({ status: status });
    } else {
      users = await this.userModel.find();
    }
    return users.map((user: any) =>
      this.convertToUser(
        user._id,
        user.fname,
        user.lname,
        user.email,
        user.avatar,
        user.status,
        user.createdAt,
        user.roles,
      ),
    );
  }

  async findOne(id: string) {
    const user = await this.findOrThrow(id);
    return this.convertToUser(
      user._id,
      user.fname,
      user.lname,
      user.email,
      user.avatar,
      user.status,
      user.createdAt,
      user.roles,
    );
  }

  async updateProfile(id: string, updateUserProfileDto: UpdateUserProfileDto) {
    await this.findOrThrow(id);
    const user = await this.userModel.findByIdAndUpdate(
      id,
      updateUserProfileDto,
    );
    return this.convertToUser(
      user._id,
      user.fname,
      user.lname,
      user.email,
      user.avatar,
      user.status,
      user.createdAt,
      user.roles,
    );
  }

  async updateStatus(id: string, updateUserStatusDto: UpdateUserStatusDto) {
    await this.findOrThrow(id);
    const user = await this.userModel.findByIdAndUpdate(
      id,
      updateUserStatusDto,
    );
    return this.convertToUser(
      user._id,
      user.fname,
      user.lname,
      user.email,
      user.avatar,
      user.status,
      user.createdAt,
      user.roles,
    );
  }

  async remove(id: string) {
    await this.findOrThrow(id);
    await this.userModel.findByIdAndDelete(id);
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }
}
