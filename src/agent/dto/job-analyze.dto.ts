import {IsString,IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";




export class jobAnalyzeDto{
@ApiProperty({ example: 'Skills: NestJS, MongoDB. 2 years experience.' })
@IsString()
@IsNotEmpty()
cv!:string

@ApiProperty({example: 'We need a NestJS developer with Docker experience.'})
@IsNotEmpty()
@IsString()
jobDescription!:string
}
export class ImproveCVDto {
  @ApiProperty({ example: 'Skills: NestJS, MongoDB. 2 years experience.' })
  @IsString()
  @IsNotEmpty()
  cv!: string;

  @ApiProperty({ example: 'Senior NestJS Developer' })
  @IsString()
  @IsNotEmpty()
  targetRole!: string;
}
export class CoverLetterDto {
  @ApiProperty({ example: 'Skills: NestJS, MongoDB. 2 years experience.' })
  @IsString()
  @IsNotEmpty()
  cv!: string;

  @ApiProperty({ example: 'We need a NestJS developer with Docker experience.' })
  @IsString()
  @IsNotEmpty()
  jobDescription!: string;

  @ApiProperty({ example: 'Google' })
  @IsString()
  @IsNotEmpty()
  companyName!: string;
}