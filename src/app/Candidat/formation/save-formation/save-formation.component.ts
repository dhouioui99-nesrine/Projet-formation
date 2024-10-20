import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/core/service/formation.service';
import { InscritService } from 'src/app/core/service/inscrit.service';
import { Formation } from 'src/app/model/formation.model';
import { Inscrit } from 'src/app/model/Inscrit.model';

@Component({
  selector: 'app-save-formation',
  templateUrl: './save-formation.component.html',
  styleUrls: ['./save-formation.component.css']
})
export class SaveFormationComponent implements OnInit {

  id: any;
  formation: Formation = new Formation();
  inscrit : Inscrit = new Inscrit();
  constructor(private formationservice: FormationService,
              private inscritservice : InscritService,
    private route: ActivatedRoute,
    private router: Router) { }

   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.formationservice.getFormationById(this.id).subscribe(data => {
      this.formation = data;
    }, error => console.log(error));
  }
  message: string = '';  // Message à afficher après le transfert



  save() {
    this.inscritservice.createInscrit(this.formation,this.inscrit).subscribe(
      (data) => {
        console.log('Transfert réussi', data);
        this.router.navigate(['/suivi']);
      },
      (error) => {
        console.error('Erreur lors du transfert de données', error);
      }
    );
  }

  onSubmit(){
    console.log(this.formation);
    this.save();
  }

  goToEmployeeList(){
    this.router.navigate(['/suivi']);
  }
}