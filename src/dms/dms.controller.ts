import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChats(@Query() query, @Param() params) {
    console.log(query, params);
  }

  @Post(':id/chats')
  postChats(@Body() body) {
    return @body;
  }
}
