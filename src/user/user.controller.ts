import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import bodyParser = require('body-parser');

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUser() {
        return this.userService.getAlluser()
    }

    @Get(':id')
    getOneUser(@Param('id') id) {
        return this.userService.getOneUser(id)
    }

    @Post()
    postUser() {
        return this.userService.postUser()
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return this.userService.putUser(body, id)
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return this.userService.deleteUser(id)
    }
}
