import { Component, OnInit } from '@angular/core';
import { StayService } from 'src/app/services/stay.service';
import { Stay } from 'src/app/model/stay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stay',
  templateUrl: './create-stay.component.html',
  styleUrls: ['./create-stay.component.css']
})
export class CreateStayComponent implements OnInit {

  stay: Stay = new Stay();
  submitted = false;

  constructor(private stayService: StayService, private router: Router) { }

  ngOnInit() {
  }

  newStay(): void {
    this.submitted = false;
    this.stay = new Stay();
  }

  save() {
    this.stayService.createStay(this.stay)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.stay = new Stay();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/stays'])
  }

}
