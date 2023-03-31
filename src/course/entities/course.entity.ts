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
   * A kurzus név
   */
  @Column()
  name: string;

  /**
   * leírása a kurzusnak, ide kerülnek a részletek
   */
  @Column()
  description: string;

  /**
   * A boritó kép url-je, a mérete mindegy mert be van álítva fixre
   */
  @Column()
  cphoto: string;

  /**
   * A tantárgy, Matematika, történelem, fizika stb...
   */
  @Column()
  subject: string;

  /**
   * témája, másodfokú egyenlet, 1900-as évek történelme, egyenes arányú gyorsaság stb...
   */
  @Column()
  topic: string;

  @Column('longtext')
  details: string;

  @Column()
  file_url: string;

  @Column()
  deadline: string;
}
