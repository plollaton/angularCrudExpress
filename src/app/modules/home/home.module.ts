import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { CrudComponent } from './components/crud/crud.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './components/icons/delete/delete.component';
import { EditComponent } from './components/icons/edit/edit.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ListComponent,
    CrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DeleteComponent,
    EditComponent,
    AngularMaterialModule,
    FormsModule,
  ]
})
export class HomeModule { }
