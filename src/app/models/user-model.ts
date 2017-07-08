import { Villager } from './villager-model';
import { Post } from './post-model';

export class User {

  username: string;
  village: any = {};

  constructor(userInfo: any) {

    this.username = userInfo.username;

    // convert a string villager name to the corresponding Villager
    const nameToVil = (vilname) => this.village[vilname];

    // cast villager json to Villager objects
    userInfo.villagers.map((vil) => new Villager(vil, this.village))
    .forEach((vil) => {
      vil.parents  = vil.parents.map(nameToVil);
      vil.students = vil.students.map(nameToVil);
      vil.teachers = vil.teachers.map(nameToVil);
    });

    // cast post json to Post objects
    userInfo.posts.map((post) => new Post(post))
    .forEach((post) => {
      nameToVil(post.author).posts.push(post); // give authors their posts
    });
  }
}
