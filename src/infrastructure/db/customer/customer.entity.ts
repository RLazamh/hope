import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryColumn,
} from 'typeorm';

export enum DocumentType {
  CEDULA = 'cedula',
  PASSPORT = 'passport',
}

@Entity()
export class Customer extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column({ nullable: true, type: 'jsonb' })
  address: JSON | null;

  @Column({ nullable: false })
  documentNumber: number;

  @Column({ nullable: false, type: 'enum', enum: DocumentType })
  documentType: DocumentType;

  @Column({ nullable: true, type: 'jsonb' })
  metadata: JSON | null;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  updatedAt: Date;
}
