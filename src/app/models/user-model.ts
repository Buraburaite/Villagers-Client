import { Villager } from './villager-model';
import { Post } from './post-model';

export class User {

  username: string;
  village: any = {};

  constructor(userInfo: any) {

    this.username = userInfo.username;
    
    // create villagers; passing instance populates this.village
    userInfo.villagers.forEach((vil) => new Villager(vil, this));

    // create posts, distributing them to their authors
    userInfo.posts.forEach((post) => {
      this.village[post.author].posts.push(new Post(post));
    });
  }

  getVillager = (vilname: string) => {
    if (this.village[vilname]) {
      return this.village[vilname];
    } else {
      console.log(`Villager ${vilname} not found`);
      return null;
    }
  };
}
