import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

/**
 * Egy kurzus regisztrálására alkalmas validáció osztály
 */
export class CreateCourseDto {
  /**
   * Kurzus név, kötelező
   */
  @IsNotEmpty()
  name: string;

  /**
   * Kurzus leírása, kötelező
   */
  @IsNotEmpty()
  description: string;

  /**
   * Borito kép, opcionális
   */

  cphoto: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  topic: string;

   @IsOptional()
   details: string;

   @IsNotEmpty()
   @IsUrl()
   file_url: string;

   @IsNotEmpty()
   deadline: string;
}
