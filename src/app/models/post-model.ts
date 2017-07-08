import { Villager } from './villager-model';
import { Comment } from './comment-model';

export class Post {

  author: any;
  content: string;
  comments: any[] = [];

  constructor(postInfo: any) {
    this.author = postInfo.author;
    this.content = postInfo.content;

    console.log(postInfo);

    postInfo.comments.forEach(this.addComment);
  }

  addComment(com) {
    this.comments.push(
      new Comment({
        author: com.author,
        content: com.content
      })
    );
  }

}
