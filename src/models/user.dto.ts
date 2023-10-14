import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

 export class LoginDTO{
    @IsEmail()
    @IsString()
    @MinLength(4)
    email:string
 }

 export class RegisterDTO extends LoginDTO{
    @IsString()
    @MaxLength(20)
    @MinLength(4)
    username:string
 }