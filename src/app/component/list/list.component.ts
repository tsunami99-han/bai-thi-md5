import { Component, OnInit } from '@angular/core';
import {Player} from "../../model/player";
import {PlayerService} from "../../service/player.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[]=[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.playerService.getAll().subscribe(playerList => {
      console.log(playerList);
      this.players=playerList;
    })
  }
}
