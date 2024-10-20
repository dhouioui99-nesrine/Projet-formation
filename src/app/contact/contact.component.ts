import { Component, OnInit } from '@angular/core';
import { contact } from '../model/contact.model';
import { ContactService } from '../core/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: contact = new contact();
  constructor(private contactservice: ContactService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  save() {
    console.log(this.contact); // Debug: voir les données envoyées
    this.contactservice.createcontact(this.contact).subscribe(
      (data) => {
        console.log('contact created successfully', data);
        
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }


  getFormationList(){
    this.router.navigate(['/contact']);
  }
  
  onSubmit(){
    console.log(this.contact);
    this.save();
  }
}