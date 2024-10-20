import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/core/service/formation.service';
import { Formation } from 'src/app/model/formation.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
        this.router.navigate(['/update-formation', id]);
      } else {
        console.error('Invalid formation ID');
      }
    }
  
    deleteFormation(id: any){
      this.formationservice.deleteFormation(id).subscribe( data => {
        console.log(data);
        this.getEmployees();
      })
    }

 
}

