import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[];
  xNext: boolean;
  winner: String;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }
  
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xNext = true;
  }

  get Player() {
    return this.xNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx, 1, this.Player);
      this.xNext = !this.xNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6] 
      ];

      for (let i = 0; lines.length; i++) {
        const[a, b, c] = lines[i];
        
        if (this.squares[a] &&
            this.squares[a] == this.squares[b] &&
            this.squares[a] == this.squares[c]
            ) {
          return this.squares[a];
        }
      }
      return null;
  }
}