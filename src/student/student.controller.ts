import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { StudentService } from './service/student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getAllStudent() {
        return this.studentService.getAllStudent()
    }

    @Get(':id')
    getOneStudent(@Param('id') id) {
        return this.studentService.getOneStudent(id)
    }

    @Post()
    postStudent() {
        return this.studentService.postStudent()
    }

    @Put(':id')
    putStudent(@Body() body, @Param('id') id) {
        return this.studentService.putStudent(body, id)
    }

    @Delete(':id')
    deleateStudent(@Param('id') id) {
        return this.studentService.deleateStudent(id)
    }
}
