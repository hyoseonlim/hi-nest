import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}

// 터미널에 nest -> 명령어 목록 나옴
// nest g co = nest generate controller
