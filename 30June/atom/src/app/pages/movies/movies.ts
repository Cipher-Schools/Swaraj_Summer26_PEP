import { Component, signal } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig, users } from '../../utils/utils';

@Component({
  selector: 'app-movies',
  imports: [Button],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  currPage = 0;
  moviesArr = signal([]);
  buttonConfig = buttonConfig;

  fetchMovies(pageNo: number) {
    this.currPage = pageNo;

    const movieApiLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=825866893c60ba5cbf0e6718bdd67310&language=en-US&page=${this.currPage}`;
    fetch(movieApiLink)
      .then((response) => response.json())
      .then((data) => {
        this.moviesArr.set(data.results);
        console.log(this.moviesArr);
      });
  }

  ngOnInit() {
    this.fetchMovies(1);
  }
}
