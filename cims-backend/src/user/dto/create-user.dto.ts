import { IsEmail, IsNotEmpty } from 'class-validator';
import Roles from '@bluescape1/cims-core';

export class CreateUserDto {
  @IsNotEmpty()
  readonly fname: string;

  @IsNotEmpty()
  readonly lname: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly roles?: Roles[];
}
