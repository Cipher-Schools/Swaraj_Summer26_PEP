import { Component, signal, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig, users } from '../../utils/utils';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  imports: [Button],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  private http = inject(HttpClient);
  private movieServices = inject(MovieService);
  currPage = 0;
  moviesArr = signal([]);
  buttonConfig = buttonConfig;

  fetchMovies(pageNo: number) {
    this.currPage = this.currPage + 1;
    this.movieServices.getNowPlaying(this.currPage).subscribe((data : any) => {
      this.moviesArr.set(data?.results);
    })
  }

  // fetchMovies(pageNo: number) {
  //   this.currPage = pageNo;

  //   const movieApiLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=825866893c60ba5cbf0e6718bdd67310&language=en-US&page=${this.currPage}`;
  //   fetch(movieApiLink)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.moviesArr.set(data.results);
  //       console.log(this.moviesArr);
  //     });
  // }

  ngOnInit() {
    this.fetchMovies(0);
  }
}
