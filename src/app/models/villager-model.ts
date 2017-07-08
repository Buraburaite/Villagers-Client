export class Villager {

  private static village: any = {};

  vilname: string;
  password: string;
  kind: string;
  fullname: string;
  firstname: string;
  lastname: string;
  school: string;
  subject: string;
  profilePic: string;
  students: any[];
  parents: any[];
  teachers: any[];

  private vilInfo: any;

  constructor(vilInfo: any) {
    // Add the villager to the village
    Villager.village[vilInfo.vilname] = this;

    // Fields
    this.vilname    = vilInfo.vilname;
    this.password   = vilInfo.password;
    this.kind       = vilInfo.kind;
    this.fullname   = vilInfo.fullname;
    this.firstname  = vilInfo.firstname;
    this.lastname   = vilInfo.lastname;
    this.school     = vilInfo.school;
    this.subject    = vilInfo.subject;
    this.profilePic = vilInfo.profilePic;
    this.parents    = vilInfo.parents;
    this.students   = vilInfo.students;
    this.teachers   = vilInfo.teachers;

  }
}
