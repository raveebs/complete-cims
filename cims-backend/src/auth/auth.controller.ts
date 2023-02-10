import { Controller, Res, Post, UseGuards, Req, Delete } from '@nestjs/common';
import { CookieOptions, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Req() req: any, @Res({ passthrough: true }) res: any) {
    const token = await this.authService.login(req.user);
    const cookieOptions: CookieOptions = {
      httpOnly: true,
      expires: new Date(
        Date.now() + +process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
      ),
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token.access_token, cookieOptions);
    return { message: 'successful' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async logout(@Res({ passthrough: true }) res: any) {
    res.clearCookie('jwt');
  }
}
