import { application } from 'express';
import AppliedUser from 'src/applied_user/entities/applied_user.entity';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A kurzus táblát jelképezi az adatbázisban
 */
@Entity()
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * összeköti az id-t a courseId-val az appliedUser-ben
   */
  @OneToMany(() => AppliedUser, (appliedUser) => appliedUser.course)
  AppliedCourse: AppliedUser[];

  /**
   * név
   */
  @Column()
  name: string;

  /**
   * rövid leírás
   */
  @Column()
  description: string;

  /**
   * A boritó kép url-je
   */
  @Column()
  cphoto: string;

  /**
   * tantárgy
   */
  @Column()
  subject: string;

  /**
   * téma
   */
  @Column()
  topic: string;

  /**
   * Részletes leírás,
   */
  @Column('longtext')
  details: string;

  /**
   * kurzus csomag url-je
   */
  @Column()
  file_url: string;

  /**
   * lejárati ideje 
   */
  @Column()
  deadline: string;
}
