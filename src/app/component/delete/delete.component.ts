import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PlayerService} from "../../service/player.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: any
  playerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  })
  constructor(private activatedRoute: ActivatedRoute,
              private playerService: PlayerService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getPlayer(this.id);
    })
  }
  getPlayer(id:number){
    return this.playerService.findById(id).subscribe(player => {
      console.log(player)
      this.playerForm.patchValue(player);
    });
  };
  delete(id: number){
    this.playerService.delete(id).subscribe(() => {
      alert("Xóa thành công");
      // @ts-ignore
      this.router.navigate(["/list"])
    })
  }

}
