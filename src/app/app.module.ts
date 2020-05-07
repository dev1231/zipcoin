import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { ReceivemoneyComponent } from './receivemoney/receivemoney.component';
import { TrackmoneyComponent } from './trackmoney/trackmoney.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AgentComponent } from './agent/agent.component';
import { ZipFoodAboutComponent } from './zipfood/about/about.component';
import { ZipfoodhomeComponent } from './zipfood/zipfoodhome/zipfoodhome.component';
import { GetapiComponent } from './getapi/getapi.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { PricingComponent } from './pricing/pricing.component';
import { StoriesComponent } from './stories/stories.component';
import { TeamComponent } from './team/team.component';
import { ZipfoundationComponent } from './zipfoundation/zipfoundation.component';
import { ZiprefillComponent } from './ziprefill/ziprefill.component';
import { HamperlistComponent } from './zipfood/hamperlist/hamperlist.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SendmoneyComponent,
    ReceivemoneyComponent,
    TrackmoneyComponent,
    HeaderComponent,
    FooterComponent,
    AgentComponent,
    ZipFoodAboutComponent,
    ZipfoodhomeComponent,
    GetapiComponent,
    SigninComponent,
    SignupComponent,
    MembershipsComponent,
    PricingComponent,
    StoriesComponent,
    TeamComponent,
    ZipfoundationComponent,
    ZiprefillComponent,
    HamperlistComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
