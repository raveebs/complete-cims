import { IsNotEmpty } from 'class-validator';

export class UpdateUserStatusDto {
  @IsNotEmpty()
  readonly status: string;
}
