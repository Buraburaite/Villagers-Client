import { Villager } from './villager.model';
import { Post } from './post.model';

export class Comment {

  author: Villager;
  content: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(comInfo: any) {
    this.author = comInfo.author;
    this.content = comInfo.content;
    this.createdAt = comInfo.createdAt;
    this.updatedAt = comInfo.updatedAt;
  }

}
