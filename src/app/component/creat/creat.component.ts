import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PlayerService} from "../../service/player.service";

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  })
  constructor(private httpClient: HttpClient,
              private router:Router,
              private playerService: PlayerService) { }

  ngOnInit(): void {
  }
  submit() {
    const player = this.playerForm.value;
    this.playerService.save(player).subscribe(() => {
      this.playerForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }

}
