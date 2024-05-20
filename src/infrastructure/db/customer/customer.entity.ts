import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

@Entity()
export class Customer {
  @PrimaryColumn()
  id?: string;

  @Column({ nullable: false })
  userName: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false, type: 'varchar' })
  gender: Gender;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false, default: false })
  email_verified: boolean;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column({ nullable: true, type: 'jsonb' })
  address?: object;

  @Column({ nullable: true, type: 'jsonb' })
  metadata?: object;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt?: Date;
}
