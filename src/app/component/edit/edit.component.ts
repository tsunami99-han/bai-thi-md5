import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  playerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  })

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
      this.playerForm.setValue(player);
    });
  };

  update(id: number) {
    const player = this.playerForm.value;
    this.playerService.update(id, player).subscribe(() => {
      alert('Cập nhật thành công');
      // @ts-ignore
      this.router.navigate(["/list"])
    }, e => {
      console.log(e);
    });
  }
}
