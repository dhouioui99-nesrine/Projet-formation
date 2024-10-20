import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestInterceptor } from './core/service/interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
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





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CreateComponent,
    UserListComponent,
    UserUpdateComponent,
    ListComponent,
    UpdateFormationComponent,
    ListFComponent,
    SaveFormationComponent,
    SuiviComponent,
    ConsulterComponent,
    ListformationComponent,
    AccComponent,
    AcccComponent,




   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    RouterModule,
    DataTablesModule,
    NgbModule
    // RoutesauthorizeAdmin

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
