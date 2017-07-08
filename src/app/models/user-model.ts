import { Villager } from './villager-model';
import { Post } from './post-model';

export class User {

  username: string;
  village: any = {};
  posts;

  constructor(userInfo: any) {

    // convert a string villager name to the corresponding Villager
    const nameToVil = (vilname) => this.village[vilname];

    this.posts = userInfo.posts;

    this.username = userInfo.username;

    const villagers = userInfo.villagers.map((vil) => new Villager(vil, this.village));

    villagers.forEach((vil) => {
      vil.parents  = vil.parents.map(nameToVil);
      vil.students = vil.students.map(nameToVil);
      vil.teachers = vil.teachers.map(nameToVil);
    });

    const posts = userInfo.posts.map((post) => new Post(post));
  }
}
