import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserMeetingComponent } from '../user-meeting/user-meeting.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserSearchClinicComponent } from '../user-search-clinic/user-search-clinic.component';
import { VetMeetingComponent } from '../vet-meeting/vet-meeting.component';
import { VetProfileComponent } from '../vet-profile/vet-profile.component';
import { VetSearchComponent } from '../vet-search/vet-search.component';
import { HomePageForVetComponent } from './home-page-for-vet.component';
import { VetRecommendedComponent } from '../vet-recommended/vet-recommended.component';

const routes: Routes = [
{
  path: '', component: HomePageForVetComponent,
  children: [
  {path:'vet-meeting',component: VetMeetingComponent},
  {path:'vet-profile',component: VetProfileComponent},
  {path:'vet-source-clinic',component: VetSearchComponent},
  {path:'vet-recommended',component: VetRecommendedComponent},
  // {path:'', redirectTo: '/vet-home-page/vet-profile'}
  ]
},


  {path:'',redirectTo:"/vet-home-page/vet-source-clinic",pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class VetRoutingModule { }
