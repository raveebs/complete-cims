import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserProfileDto {
  @IsNotEmpty()
  readonly fname: string;

  @IsNotEmpty()
  readonly lname: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
