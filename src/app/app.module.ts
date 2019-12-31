import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { NewCatalogComponent } from './components/new-catalog/new-catalog.component';
import { UpdateCatalogComponent } from './components/update-catalog/update-catalog.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { NewProductComponent } from './components/new-product/new-product.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client_catalog', component: ClientCatalogComponent },
  { path: 'admin_catalog', component: AdminCatalogComponent },
  { path: 'admin_product', component: AdminProductComponent },
  { path: 'client_product', component: ClientProductComponent },
  { path: 'client_search', component: ClientSearchComponent },
  { path: 'admin_landing', component: AdminLandingComponent },
  { path: 'client_landing', component: ClientLandingComponent },
  { path: 'new_catalog', component: NewCatalogComponent},
  { path: 'update_catalog', component: UpdateCatalogComponent},
  { path: 'update_product', component: UpdateProductComponent},
  { path: 'new_product', component: NewProductComponent}
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
    ClientLandingComponent,
    NewCatalogComponent,
    UpdateCatalogComponent,
    UpdateProductComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
