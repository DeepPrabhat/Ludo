import { Component,OnInit } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(){};
  player1:Player={};
  player2:Player={};
  player3:Player={};
  player4:Player={};
  ngOnInit(): void {
    this.player1={  playerName:'deep',
    playerColor:'blue',
    pawnsInBase:4,
    playingPawn:0,
    playerKillCount:0,
    playerDeathCount:0,
    pawnsInEnd:0
  }
  this.player2={  playerName:'rishi',
  playerColor:'blue',
  pawnsInBase:4,
  playingPawn:0,
  playerKillCount:0,
  playerDeathCount:0,
  pawnsInEnd:0
}
this.player3={  playerName:'anit',
playerColor:'blue',
pawnsInBase:4,
playingPawn:0,
playerKillCount:0,
playerDeathCount:0,
pawnsInEnd:0
}
this.player4={  playerName:'aman',
playerColor:'blue',
pawnsInBase:4,
playingPawn:0,
playerKillCount:0,
playerDeathCount:0,
pawnsInEnd:0
}
  }
  diceValue:number=0;


  rollDice()
  {
    this.diceValue=Math.floor(Math.random() * 6)+1;
    console.log(this.diceValue);
    if(this.diceValue==1)
    {
      this.player1.playingPawn=1;

    }
  }

}
