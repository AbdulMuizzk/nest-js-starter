import { Repository } from 'typeorm';
import { Student } from './student.entity';

export class StudentRepository extends Repository<Student> {}
