import { Body, Controller, Get, Post, Req, Response } from '@nestjs/common';
import { JoinRequestDTO } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return 'This action returns all users';
  }
  @Post()
  postUsers(@Body() data: JoinRequestDTO) {
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }

  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @Post('logout')
  logout(@Req() req, @Response() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
