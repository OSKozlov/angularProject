import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie'; 
import { fakeMovies } from '../movies/fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "Star Wars",
    releaseYear: 1977
  }
  
  movies = fakeMovies;
  
  constructor() { }

  ngOnInit() {
  }
  
  selectedMovie: Movie;
  temp: string;
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    this.temp = JSON.stringify(this.selectedMovie);
    console.log('selectedMovie = ' + this.temp);
//    alert('selectedMovie = ' + this.temp);
  }

}
