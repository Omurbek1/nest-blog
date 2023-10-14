import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponse, LoginDTO, RegisterDTO } from 'src/models/user.model';
import { ResponseObject } from 'src/models/response.model';

@Controller('users')
export class AuthController {
  constructor(private authServise: AuthService) { }


  @Post()
  async register(
    @Body(ValidationPipe) credentials: RegisterDTO,
  ): Promise<ResponseObject<'user', AuthResponse>> {
    const user = await this.authServise.register(credentials);
    return { user };
  }

  @Post('/login')
  async login(@Body(ValidationPipe) credentials: LoginDTO) {
    const user = await this.authServise.login(credentials)
    return { user }
  }
}
