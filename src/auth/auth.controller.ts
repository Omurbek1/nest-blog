import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from 'src/models/user.dto';

@Controller('users')
export class AuthController {
    constructor(private authServise:AuthService){}

    @Get()
    getAll(){
        return this.authServise.getAllUsers()
    }
    @Post()
    register(@Body(ValidationPipe) credentials:RegisterDTO){
       return this.authServise.register(credentials);
    }
    @Post('/login')
    login(@Body(ValidationPipe) credentials:LoginDTO){
      return  this.authServise.login(credentials)
    }
}
