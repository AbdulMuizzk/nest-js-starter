import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomLogger } from '../../common/customerLogger';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private customLogger: CustomLogger,
  ) {}

  async getAllStudents(): Promise<Student[]> {
    try {
      return await this.studentRepository.createQueryBuilder().getMany();
    } catch (e) {
      this.customLogger.error(`Error fetching all students: ${e}`, e.stack);
      return null;
    }
  }

  async enroll(student: Student): Promise<Student> {
    const findStudentEmail = await this.studentRepository
      .createQueryBuilder('student')
      .where('student.email = :email', { email: student.email })
      .getOne();
    if (findStudentEmail) {
      throw new ConflictException(
        'The Student already exists with the provided email',
      );
    }
    return await this.studentRepository.save(student);
  }
}
