import { Component, OnInit } from '@angular/core';
import { Stay } from 'src/app/model/stay';
import { ActivatedRoute, Router } from '@angular/router';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'app-update-stay',
  templateUrl: './update-stay.component.html',
  styleUrls: ['./update-stay.component.css']
})
export class UpdateStayComponent implements OnInit {

  id:number;
  stay:Stay;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private stayService: StayService) { }

  ngOnInit() {
    this.stay = new Stay();

    this.id = this.route.snapshot.params['id'];

    this.stayService.getStay(this.id)
    .subscribe(data => {
      console.log(data);
      this.stay = data;

    }, error => console.log(error)
    );
  }

  updateStay() {
    this.stayService.updateStay(this.id, this.stay)
    .subscribe(data => console.log(data), error => console.log(error));
    this.stay = new Stay();
    this.goToList();
  }

  onSubmit() {
    this.updateStay();
  }

  goToList() {
    this.router.navigate(['/stays']);
  }

}
