import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ name: 'first_name' })
  firstName: string;
  @Column({ name: 'last_name' })
  lastName: string;
  @Column()
  age: number;
  @Column()
  email: string;
}
