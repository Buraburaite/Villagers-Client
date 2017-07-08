import { Villager } from './villager-model';
import { Comment } from './comment-model';

export class Post {

  author: any;
  content: string;
  comments: any[] = [];

  constructor(postInfo: any) {
    this.author = postInfo.author;
    this.content = postInfo.content;

    postInfo.comments.forEach(this.addComment);
  }

  addComment = (com) => { // this has to be an arrow function for some reason, apparently
    this.comments.push(
      new Comment({
        author: com.author,
        content: com.content
      })
    );
  };

}
