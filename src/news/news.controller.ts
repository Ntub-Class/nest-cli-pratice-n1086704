import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newService: NewsService) { }

    @Get()
    getAllNews() {
        return this.newService.getAllNews()
    }

    @Get(':id')
    getOneNews(@Param('id') id) {
        return this.newService.getOneNews(id)
    }

    @Post()
    postNews() {
        return this.newService.postNews()
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id) {
        return this.newService.putNews(body, id)
    }

    @Delete(':id')
    deleteNews(@Param('id') id){
        return this.newService.deleteNews(id)
    }
}
