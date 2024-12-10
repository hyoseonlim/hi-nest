import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServie: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesServie.finAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number) {
    return this.moviesServie.findById(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesServie.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesServie.delete(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: CreateMovieDto) {
    return this.moviesServie.update(movieId, updateData);
  }
}
