import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CustomerDTO {
  @ApiProperty({
    description: 'Customer ID',
    required: false,
  })
  @IsString()
  id?: string;

  @ApiProperty({
    description: 'Customer name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Customer email',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Customer phone number',
  })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    description: 'Customer address',
    required: false,
  })
  address?: JSON | null;

  @ApiProperty({
    description: 'Customer document number',
  })
  @IsNotEmpty()
  documentNumber: number;

  @ApiProperty({
    description: 'Customer document type',
    enum: DocumentType,
  })
  @IsNotEmpty()
  @IsEnum(DocumentType)
  documentType: DocumentType;

  @ApiProperty({
    description: 'Customer metadata',
    required: false,
  })
  metadata?: JSON | null;
}
