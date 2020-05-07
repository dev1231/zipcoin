import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { TrackmoneyComponent } from './trackmoney/trackmoney.component';
import { ReceivemoneyComponent } from './receivemoney/receivemoney.component';
import { ContactComponent } from './contact/contact.component';
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

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'send-money', component:SendmoneyComponent},
  {path:'home', component:HomeComponent},
  {path:'track-money', component:TrackmoneyComponent},
  {path:'receive-money', component:ReceivemoneyComponent},
  {path:'contact-us', component:ContactComponent},
  {path:'agent', component:AgentComponent},
  {path:'zipfood', component:ZipfoodhomeComponent},
  {path:'zipfood/about', component:ZipFoodAboutComponent},
  {path:'zipfood/hamper-list', component:HamperlistComponent},
  {path:'getapi', component:GetapiComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'memberships', component:MembershipsComponent},
  {path:'pricing', component:PricingComponent},
  {path:'stories', component:StoriesComponent},
  {path:'team', component:TeamComponent},
  {path:'zip-foundation', component:ZipfoundationComponent},
  {path:'zip-refill', component:ZiprefillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
