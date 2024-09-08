import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { CustomLogger } from '../../common/customerLogger';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService, CustomLogger],
  exports: [StudentService],
})
export class StudentModule {}
