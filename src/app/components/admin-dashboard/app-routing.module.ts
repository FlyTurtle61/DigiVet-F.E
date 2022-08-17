import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminCommentManagmentComponent } from '../admin-comment-managment/admin-comment-managment.component';
import { AdminCancelledMeetingManagmentComponent } from '../admin-cancelled-meeting-managment/admin-cancelled-meeting-managment.component';
import { AdminMeetingManagmentComponent } from '../admin-meeting-managment/admin-meeting-managment.component';
import { CreateAdminComponent } from '../create-admin/create-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminRecommendedManagmentComponent } from '../admin-recommended-managment/admin-recommended-managment.component';
import { AdminVetManagmentComponent } from '../admin-vet-managment/admin-vet-managment.component';
import { AdminUserManagmentComponent } from '../admin-user-managment/admin-user-managment.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
    {path:'admin-comment',component: AdminCommentManagmentComponent},
    {path:'admin-cancelled-meeting',component: AdminCancelledMeetingManagmentComponent},
    {path:'admin-meeting-manager',component: AdminMeetingManagmentComponent},
    {path:'admin-recommended-manager', component: AdminRecommendedManagmentComponent},
    {path:'admin-create',component: CreateAdminComponent},
    {path:'vet-list',component: AdminVetManagmentComponent},
    {path:'user-list',component: AdminUserManagmentComponent}
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
export class AppRoutingModule { }
