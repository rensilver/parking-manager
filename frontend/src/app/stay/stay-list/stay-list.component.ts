import { Component, OnInit } from '@angular/core';
import { StayDetailsComponent } from '../stay-details/stay-details.component';
import { Observable } from 'rxjs';
import { StayService } from 'src/app/services/stay.service';
import { Stay } from 'src/app/model/stay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.css']
})
export class StayListComponent implements OnInit {

  stays: Observable<Stay[]>;

  constructor(private stayService: StayService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.stays = this.stayService.getStayList();
  }

  deleteStay (id: number){
    this.stayService.deleteStay(id)
    .subscribe(
      data => {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  stayDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateStay(id: number){
    this.router.navigate(['update', id])
  }

}
