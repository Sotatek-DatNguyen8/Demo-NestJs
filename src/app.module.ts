import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import UserEntity from './entities/user';
import PostEntity from './entities/post';
import CommnentEntity from './entities/comment';

import TagEntity from './entities/Tag';
import CategoryEntity from './entities/Category';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [
    DatabaseModule.forRoot({
      entities: [
        PostEntity,
        UserEntity,
        CommnentEntity,
        CategoryEntity,
        TagEntity,
      ],
    }),
    AuthModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
