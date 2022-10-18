import { Component, OnInit } from '@angular/core';
import { Joke } from '../../Joke';
import { ChuckNorrisJokeService } from '../../services/chuck-norris-joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke = new Joke();
  allJokes: Joke[] = [];
  jokeBtnText: string = 'Click for a Joke';

  constructor(private jokeService: ChuckNorrisJokeService) { }

  ngOnInit(): void {
    this.getAllJokes();
  }

  getJoke() {
    this.jokeService.getJoke()
      .subscribe((joke) => {
        this.joke = joke;
        this.jokeBtnText = 'Next Joke';
      });
  }

  saveJoke() {
    this.jokeService.saveJoke(this.joke)
      .subscribe(data => {
        console.log(data);
        this.getAllJokes();
      });
  }

  getAllJokes() {
    this.jokeService.getAllJokes()
      .subscribe((data) =>
        (this.allJokes = data)
      );
  }

  deleteAllJokes() {
    alert('Chuck Norris doesn\'t give a warning before deleting.' );
    this.jokeService.deleteAllJokes()
      .subscribe(() => this.getAllJokes()
      );
  }
}
