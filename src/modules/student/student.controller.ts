import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentInsertionDto } from './dto/studentInsertion.dto';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('all')
  async getAllStudents() {
    return await this.studentService.getAllStudents();
  }
  @Post('enroll')
  async enrollStudent(@Body() body: StudentInsertionDto) {
    return await this.studentService.enroll(body);
  }
}
