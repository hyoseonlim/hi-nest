// CreateMovieDto 클래스를 베이스로 하는 PartialType (일부만 수정 가능하도록)

import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
