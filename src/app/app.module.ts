import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CatsComponent } from './cats/cats.component';


import 'bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboveTheFoldComponent,
    MySkillsComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    LegalNoticeComponent,
    ImprintComponent,
    MainPageComponent,
    CatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
