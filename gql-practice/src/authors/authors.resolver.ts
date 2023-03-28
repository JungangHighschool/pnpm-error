import { Args, Resolver, Query, Int } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';


/*The argument passed to the @Resolver() decorator is optional,
but comes into play when our graph becomes non-trivial.
It's used to supply a parent object used by field resolver functions
as they traverse down through an object graph.*/
@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(private readonly aurhorsService: AuthorsService) {}

  @Query((returns) => Author,{name: 'author'})
  async getAuthor(@Args('id', { type: () => Int }) id: number)
  {
      return this.aurhorsService.;
  }
}
