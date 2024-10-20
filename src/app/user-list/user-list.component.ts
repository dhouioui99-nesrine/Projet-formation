import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { UserModel } from '../model/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user!: UserModel[];

  constructor(private userservice: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.userservice.getuserList().subscribe(data => {
      this.user = data;
    });
  }

 UserDetails(id: any){
    this.router.navigate(['details', id]);
  }

  updateUser(id: any): void {
    if (id) {
      this.router.navigate(['/update-user', id]);
    } else {
      console.error('Invalid user ID');
    }
  }

  deleteUser(id: any){
    this.userservice.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}

