import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserProfileDto } from './dto/update-profile.dto';
import { UpdateUserStatusDto } from './dto/update-status.dto';
import { UserService } from './user.service';
import {
  CreateUserRequest,
  CreateUserResponse,
  UserService as US,
} from '@raveerocks/cims-core/src/user/api';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query('status') status?: string) {
    return this.userService.findAll(status);
  }

  @Get('me')
  findMe(@Req() req: any) {
    return this.userService.findOne(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id/profile')
  updateProfile(
    @Param('id') id: string,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.userService.updateProfile(id, updateUserProfileDto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() updateUserStatusDto: UpdateUserStatusDto,
  ) {
    console.log(updateUserStatusDto);
    return this.userService.updateStatus(id, updateUserStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
