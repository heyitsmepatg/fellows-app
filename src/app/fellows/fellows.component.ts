import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FellowsService } from '../fellows.service'
import { Fellow } from '../fellow';


@Component({
  selector: 'app-fellows',
  templateUrl: './fellows.component.html',
  styleUrls: ['./fellows.component.scss']
})
export class FellowsComponent implements OnInit {
  fellows: Observable<Fellow[]>;
  //fellow1 = new Fellow(1, 'Patrick', 'teacher');
  constructor(
    private fellowService: FellowsService,
  ) { }

  ngOnInit() {
    this.fellows = this.fellowService.getFellows();
    console.log("fellows in onInit", this.fellows);
  }

  getFellows(): void {
    this.fellowService.getFellows()
      .subscribe(function (fellows) {
        this.fellows = fellows;
        console.log(this.fellows);
      });
    // this.fellows = [this.fellow1];
  }

}
