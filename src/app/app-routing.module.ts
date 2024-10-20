import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { CreateComponent } from './formation/create/create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ListComponent } from './formation/list/list.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';
import { ListFComponent } from './Candidat/formation/list-f/list-f.component';
import { SaveFormationComponent } from './Candidat/formation/save-formation/save-formation.component';
import { SuiviComponent } from './Candidat/formation/suivi/suivi.component';
import { ConsulterComponent } from './contact/consulter/consulter.component';
import { ListformationComponent } from './listformation/listformation.component';
import { AccComponent } from './admin/acc/acc.component';
import { AcccComponent } from './Candidat/accc/accc.component';
import { AuthGuard } from './core/service/auth.guard';




const routes: Routes = [
  

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'contact' , component:ContactComponent},
  {path:'consulter', component:ConsulterComponent},
  {path:'listformation', component:ListformationComponent},
  {path:'acc', component: AccComponent},
  {path:'homec', component:AcccComponent},


  {path: 'formation',component:CreateComponent},
  {path: 'list',component:ListComponent},
  {path : 'update-formation/:id', component:UpdateFormationComponent},

  {path: 'list-user' , component:UserListComponent },
  {path: 'update-user/:id' , component:UserUpdateComponent},

  
 {path: 'listf' , component:ListFComponent},
 {path: 'save/:id', component:SaveFormationComponent},
 {path: 'suivi', component:SuiviComponent},


  
  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
