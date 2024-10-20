import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/core/service/formation.service';
import { Formation } from 'src/app/model/formation.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formation: Formation = new Formation();
  constructor(private formationservice: FormationService,
    private router: Router) { }
 
  ngOnInit(): void {
  }

  save() {
    console.log(this.formation); // Debug: voir les données envoyées
    this.formationservice.createFormation(this.formation).subscribe(
      (data) => {
        console.log('Formation created successfully', data);
   
        this.router.navigate(['/formation']);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }


  getFormationList(){
    this.router.navigate(['/formation']);
  }
  
  onSubmit(){
    console.log(this.formation);
    this.save();
  }
}