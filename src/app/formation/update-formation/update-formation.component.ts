import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/core/service/formation.service';
import { Formation } from 'src/app/model/formation.model';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  id: any;
  formation: Formation = new Formation();
  constructor(private formationservice: FormationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.formationservice.getFormationById(this.id).subscribe(data => {
      this.formation = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.formationservice.updateFormation(this.id, this.formation).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/list']);
  }
}