import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PostModule } from './post/post.module';
import { AuthorsModule } from './authors/authors.module';
import { RModule } from './s/r/r.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [],
      /*
      in code first approach, path of auto-created schema
      true for memory in fly, otherwise 
      */
      autoSchemaFile: true,
      //sortSchema for sorting as a lexicographically, otherwise set in order they defined
      sortSchema: false,
    }),
    PostModule,
    AuthorsModule,
    RModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
