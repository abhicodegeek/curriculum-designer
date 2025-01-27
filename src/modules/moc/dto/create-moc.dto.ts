import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMocDto {
  @ApiProperty({
    description: 'The message to be added to the Moc',
    type: String,
  })
  @IsString()
  message: string;
}
