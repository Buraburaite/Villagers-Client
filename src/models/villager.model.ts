import { User } from './user.model';
import { Post } from './post.model';

export class Villager {

  user: User;
  vilname: string;
  password: string;
  kind: string;
  fullname: string;
  firstname: string;
  lastname: string;
  school: string;
  subject: string;
  profilePic: string;
  posts: Post[] = [];

  /*====
  Because Villager instances contain references to other instances that may not
  yet exist, these references are instead implemented with a getter.
  ====*/
  private _parents: string[];
  private _students: string[];
  private _teachers: string[];

  public onVillageComplete(): void {
    // turn _parents into Vil objects (then deprecate getters);
  }

  get parents()  :Villager[] { return this._parents.map( this.user.getVillager); }
  get students() :Villager[] { return this._students.map(this.user.getVillager); }
  get teachers() :Villager[] { return this._teachers.map(this.user.getVillager); }
  get subscribingTo(): Villager[] {
    return this.parents.concat(this.students, this.teachers);
  }
  get subscribedPosts(): Post[] {
    return this.subscribingTo.reduce((acc, vil) => {
      return acc.concat(vil.posts);
    }, []);
  }

  constructor(vilInfo: any, user: User) {
    this.user = user;
    this.user.village[vilInfo.vilname] = this;

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
    this._parents    = assertList(vilInfo.parents);
    this._students   = assertList(vilInfo.students);
    this._teachers   = assertList(vilInfo.teachers);

  }
}
