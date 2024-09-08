import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixStudentTable1725827280331 implements MigrationInterface {
  name = 'FixStudentTable1725827280331';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "student" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "first_name"`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD "first_name" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "last_name"`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD "last_name" character varying`,
    );

    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD "email" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    await queryRunner.query(`ALTER TABLE "student" ADD "email" text NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "student_email_unique" UNIQUE ("email")`,
    );
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "last_name"`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD "last_name" text NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "first_name"`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD "first_name" text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "PK_3d8016e1cb58429474a3c041904"`,
    );
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "student" ADD "id" bigint NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "student_pkey" PRIMARY KEY ("id")`,
    );
  }
}

