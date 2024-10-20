import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/core/service/formation.service';
import { Formation } from 'src/app/model/formation.model';

@Component({
  selector: 'app-list-f',
  templateUrl: './list-f.component.html',
  styleUrls: ['./list-f.component.css']
})
export class ListFComponent implements OnInit {

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

  
    updateFormation(id: any): void {
      if (id) {
        this.router.navigate(['/save', id]);
      } else {
        console.error('Invalid formation ID');
      }
    }
  
  

 
}

