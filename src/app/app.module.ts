import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { Absence } from './shared/domain/absence'
import { AppComponent } from './app.component';
import { AbsenceVisuComponent } from './absences/absence-visu/absence-visu.component';
import { NavManagerComponent } from './nav-manager/nav-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from './shared/pipes/date.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ValidationDemandesComponent } from './validation-demandes/validation-demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AbsenceRequestComponent } from './absences/absence-request/absence-request.component'
import { PlanningAbsComponent } from './planning-abs/planning-abs.component'
import { AbsenceDeleteComponent } from './absences/absence-delete/absence-delete.component';
import { AbsenceUpdateComponent } from './absences/absence-update/absence-update.component';
import { AbsenceVisualizeComponent } from './absences/absence-visualize/absence-visualize.component';
import { AbsenceService } from './shared/service/absence.service';
import { TypeCongePipe } from './shared/pipes/type-conge.pipe';
import { VisualisationComponent } from './feries/visualisation/visualisation.component';


const appRoutes: Routes = [ 
  { path: 'validDmdes', component: ValidationDemandesComponent }, // /page1 affiche le composant A
  { path: 'accueil', component: AccueilComponent },
  { path: 'planningAbs', component: PlanningAbsComponent},
  { path: 'gestionAbs', component: AbsenceVisuComponent},
  { path: 'request', component: AbsenceRequestComponent},
  { path: '**', redirectTo: 'accueil'} // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    AbsenceVisuComponent,
    NavManagerComponent,
    DatePipe,
    AbsenceRequestComponent,
    NavManagerComponent,
    ValidationDemandesComponent,
    AccueilComponent,
    AbsenceRequestComponent,
    PlanningAbsComponent,
    DatePipe,
    AbsenceDeleteComponent,
    AbsenceUpdateComponent,
    AbsenceVisualizeComponent,
    AbsenceRequestComponent,
    TypeCongePipe,
    VisualisationComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AbsenceService, NgbActiveModal],
  bootstrap: [AppComponent],
  exports: [PlanningAbsComponent]
})
export class AppModule { }
