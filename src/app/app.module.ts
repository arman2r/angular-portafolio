import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApproutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BannerComponent } from './banner/banner.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FooterComponent } from './footer/footer.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { ParallaxContainerComponent } from './parallax-container/parallax-container.component';
import { ItemPresentationComponent } from './item-presentation/item-presentation.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocemeComponent } from './conoceme/conoceme.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    BannerComponent,
    PortafolioComponent,
    ContactformComponent,
    FooterComponent,
    PresentacionComponent,
    MenuToolbarComponent,
    ParallaxContainerComponent,
    ItemPresentationComponent,
    ExperienciaComponent,
    ConocemeComponent,
    EstudiosComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
