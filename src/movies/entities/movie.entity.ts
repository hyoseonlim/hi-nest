// 서비스를 보내고 받을 class(interface)를 export
// 여기서는 그냥 java object를 사용하나, 원래는 entities에 실제 DB Model 만들어야 함
export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
