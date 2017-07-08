import { Post } from './post-model';

export class Villager {

  vilname: string;
  password: string;
  kind: string;
  fullname: string;
  firstname: string;
  lastname: string;
  school: string;
  subject: string;
  profilePic: string;
  parents: any[];
  students: any[];
  teachers: any[];
  posts: Post[] = [];

  constructor(vilInfo: any, village: any) {
    // Add the villager to the village
    village[vilInfo.vilname] = this;

    // Ensures json came out as a list
    const assertList = (x) => {
      if (typeof x === 'string') {
        if (x.length) { return [x]; }
        else          { return []; }
      }
      return x;
    };

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
    this.parents    = assertList(vilInfo.parents);
    this.students   = assertList(vilInfo.students);
    this.teachers   = assertList(vilInfo.teachers);

  }
}
