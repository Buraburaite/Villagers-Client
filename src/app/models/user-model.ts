import { Villager } from './villager-model';
import { Post } from './post-model';

export class User {

  username: string;
  village: any = {};
  villagers: Villager[] = [];

  constructor(userInfo: any) {

    this.username = userInfo.username;

    // create villagers; passing instance populates this.village
    userInfo.villagers.forEach((vil) => {
      let villager = new Villager(vil, this);
      this.village[vil.vilname] = villager;
      this.villagers.push(villager);
    });

    // create posts, create comments, distributing them to their authors
    userInfo.posts.forEach((post) => {
      post.author = this.getVillager(post.author);
      post.comments.forEach((com) => this.getVillager(com.author));
      this.village[post.author.vilname].posts.push(new Post(post));
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
