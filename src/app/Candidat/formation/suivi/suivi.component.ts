import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/core/service/formation.service';
import { InscritService } from 'src/app/core/service/inscrit.service';
import { Formation } from 'src/app/model/formation.model';
import { Inscrit } from 'src/app/model/Inscrit.model';
import { UserModel } from 'src/app/model/User.model';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {

  inscrit!: Inscrit[];

  user!: UserModel[];
  constructor(private inscritservice: InscritService,
    private router: Router) { }

    ngOnInit(): void {
      this.getEmployees();
    }
  
    private getEmployees(){
      this.inscritservice.getInscritList().subscribe(data => {
        this.inscrit = data;
      });
    }

  

  
   
  
    deleteFormation(id: any){
      this.inscritservice.deleteInscrit(id).subscribe( data => {
        console.log(data);
        this.getEmployees();
      })
    }
 
}


