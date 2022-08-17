import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageForUserComponent } from './home-page-for-user.component';
import { UserMeetingComponent } from '../user-meeting/user-meeting.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserSearchClinicComponent } from '../user-search-clinic/user-search-clinic.component';
import { UserCanceledMeetingComponent } from '../user-canceled-meeting/user-canceled-meeting.component';
import { UserRecommendedComponent } from '../user-recommended/user-recommended.component';

const routes: Routes = [
  {
    path: '', component: HomePageForUserComponent,
    children: [
    {path:'user-meeting',component: UserMeetingComponent},
    {path:'user-profile',component: UserProfileComponent},
    {path:'user-source-clinic',component: UserSearchClinicComponent},
    {path:'user-canceled-meeting', component: UserCanceledMeetingComponent},
    {path:'meeting-create',component: UserMeetingComponent},
    {path:'recommended',component:UserRecommendedComponent}
    ]
  },
  {path:'',redirectTo:"/user-home-page/user-source-clinic",pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class UserRoutingModule { }
