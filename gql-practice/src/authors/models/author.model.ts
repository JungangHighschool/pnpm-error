import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';

@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field((type) => [Post])
  posts: Post[];
}
