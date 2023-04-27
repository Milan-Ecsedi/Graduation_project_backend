import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';


export class CreateCourseDto {
  

  @IsNotEmpty()
  @ApiProperty({

    description: 'A Kurzus megnevezése, kötelező megadni',
    type: 'string'
    })
  name: string;

  
  @IsNotEmpty()
  @ApiProperty({
    description: 'Kurzus rövid leírása, kötelező megadni',
    type:'string'
  })
  description: string;

  
  @ApiProperty({
    description: 'Borító kép url-je, opcionális',
    type:'string'
  })
  cphoto: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Tantárgy, kötelző megadni',
    type: 'string'
  })
  subject: string;

  @IsNotEmpty()
  @ApiProperty({
    description:'témakőr az adott tantárgyon belül',
    type: 'string'
  })
  topic: string;

   @ApiProperty({
    description:'Kurzus részletes leírása, opcionális',
    type: 'string'
   })
   details: string;

   @IsNotEmpty()
   @IsUrl()
   @ApiProperty({
    description: 'Kurzus csomag url link-je , kötelező',
    type: 'string'
   })
   file_url: string;

   @IsNotEmpty()
   @ApiProperty({
    description:'Kurzus Lejárati ideje',
    type: 'string'
   })
   deadline: string;
}
