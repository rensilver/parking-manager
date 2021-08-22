import { Component, OnInit } from '@angular/core';
import { Stay } from 'src/app/model/stay';
import { StayService } from 'src/app/services/stay.service';
import { StayListComponent } from '../stay-list/stay-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stay-details',
  templateUrl: './stay-details.component.html',
  styleUrls: ['./stay-details.component.css']
})
export class StayDetailsComponent implements OnInit {

  id: number;
  stay: Stay;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private stayService: StayService) { }

  ngOnInit() {
    this.stay = new Stay();
    this.id = this.route.snapshot.params['id'];

    this.stayService.getStay(this.id)
    .subscribe(data => {
      console.log(data)
      this.stay = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['stays']);
  }

}
