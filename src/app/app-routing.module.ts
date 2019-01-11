import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocemeComponent } from './conoceme/conoceme.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'experiencia', component: ExperienciaComponent, outlet: 'experiencia' },
    { path: 'conoceme', component: ConocemeComponent, outlet: 'conoceme' },
    { path: 'estudios', component: EstudiosComponent, outlet: 'estudios' },
    { path: '**', component: PagenotfoundComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class ApproutingModule {

}