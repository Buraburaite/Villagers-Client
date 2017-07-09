import { Villager } from './villager-model';
import { Post } from './post-model';

export class Comment {

  author: Villager;
  content: string;

  constructor(comInfo: any) {
    this.author = comInfo.author;
    this.content = comInfo.content;
  }

}
