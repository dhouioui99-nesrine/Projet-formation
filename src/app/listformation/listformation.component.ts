import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../core/service/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listformation',
  templateUrl: './listformation.component.html',
  styleUrls: ['./listformation.component.css']
})
export class ListformationComponent implements OnInit {

  formation!: Formation[];

  constructor(private formationservice: FormationService,
    private router: Router) { }

    ngOnInit(): void {
      this.getEmployees();
    }
  
    private getEmployees(){
      this.formationservice.getFormationList().subscribe(data => {
        this.formation = data;
      });
    }

  
   

 
}

