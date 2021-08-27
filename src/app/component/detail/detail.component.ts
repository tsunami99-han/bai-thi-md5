import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PlayerService} from "../../service/player.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Player} from "../../model/player";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: any
  player: Player = {}

  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getPlayer(this.id)
    })
  }

  getPlayer(id: number) {
    return this.playerService.findById(id).subscribe(player => {
      console.log(player)
    this.player=player;
    });
  };
}
