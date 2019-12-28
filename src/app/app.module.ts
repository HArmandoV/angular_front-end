import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ClientCatalogComponent } from './components/client-catalog/client-catalog.component';
import { AdminCatalogComponent } from './components/admin-catalog/admin-catalog.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { ClientProductComponent } from './components/client-product/client-product.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { ClientLandingComponent } from './components/client-landing/client-landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ClientCatalogComponent,
    AdminCatalogComponent,
    AdminProductComponent,
    ClientProductComponent,
    ClientSearchComponent,
    AdminLandingComponent,
    ClientLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
