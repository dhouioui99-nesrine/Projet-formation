import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/core/service/contact.service';
import { contact } from 'src/app/model/contact.model';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  contact!: contact[];

  constructor(private contactservice: ContactService,
    private router: Router) { }

    ngOnInit(): void {
      this.getEmployees();
    }
  
    private getEmployees(){
      this.contactservice.goToContactList().subscribe(data => {
        this.contact = data;
      });
    }

  
    
  
    deleteFormation(id: any){
      this.contactservice.deletecontact(id).subscribe( data => {
        console.log(data);
        this.getEmployees();
      })
    }

 
}

