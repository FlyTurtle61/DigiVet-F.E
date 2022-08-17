import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginForUserComponent } from './components/login-for-user/login-for-user.component';
import { LoginForVetComponent } from './components/login-for-vet/login-for-vet.component';
import { SorguComponent } from './components/sorgu/sorgu.component';
import { HomePageForVetComponent } from './components/home-page-for-vet/home-page-for-vet.component';
import { HomePageForUserComponent } from './components/home-page-for-user/home-page-for-user.component';
import { LoginForUserBodyComponent } from './components/login-for-user/login-for-user-body/login-for-user-body.component';
import { HttpClientModule } from '@angular/common/http';
import { simpleReducer } from './SimpleReducer';
import { StoreModule } from '@ngrx/store';
import { VetCopyrightComponent } from './components/vet-copyright/vet-copyright.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserMeetingComponent } from './components/user-meeting/user-meeting.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSearchClinicComponent } from './components/user-search-clinic/user-search-clinic.component';
import { VetMeetingComponent } from './components/vet-meeting/vet-meeting.component';
import { VetProfileComponent } from './components/vet-profile/vet-profile.component';
import { VetSearchComponent } from './components/vet-search/vet-search.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { VetRoutingModule } from './components/home-page-for-vet/vet-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { VetMeetFilterPipe } from './filter-pipes/vet-meeting-search-filter/vet-meet-filter.pipe';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { UserCanceledMeetingComponent } from './components/user-canceled-meeting/user-canceled-meeting.component';
import { UserMeetPipe } from './filter-pipes/user-meeting-search-filter/user-meet.pipe';
import { VetCountryPipe } from './filter-pipes/vet-country-filter/vet-country.pipe';
import { VetNameSearchPipe } from './filter-pipes/vet-search/vet-name-search.pipe';
import { UserRecommendedComponent } from './components/user-recommended/user-recommended.component';
import { VetRecommendedComponent } from './components/vet-recommended/vet-recommended.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { AdminCommentManagmentComponent } from './components/admin-comment-managment/admin-comment-managment.component';
import { AdminMeetingManagmentComponent } from './components/admin-meeting-managment/admin-meeting-managment.component';
import { AdminRecommendedManagmentComponent } from './components/admin-recommended-managment/admin-recommended-managment.component';
import { AdminCancelledMeetingManagmentComponent } from './components/admin-cancelled-meeting-managment/admin-cancelled-meeting-managment.component';
import { AdminUserManagmentComponent } from './components/admin-user-managment/admin-user-managment.component';
import { AdminVetManagmentComponent } from './components/admin-vet-managment/admin-vet-managment.component';
import { CommentManagerPipe } from './filter-pipes/user-comment-manager-filter/comment-manager.pipe';
import { TodoComponent } from './components/admin-recommended-managment/todo/todo.component';
import { InProgressComponent } from './components/admin-recommended-managment/in-progress/in-progress.component';
import { CompleteComponent } from './components/admin-recommended-managment/complete/complete.component';
import { AdminCancelledPipe } from './filter-pipes/admin-cancelled-meeting-filter/admin-cancelled.pipe';
import { MeetingControlPipe } from './filter-pipes/admin-meeting-control-filter/meeting-control.pipe';
import { AdminGetallUserPipe } from './filter-pipes/admin-getAllUser-page-filter/admin-getall-user.pipe';
import { AdminGetallVetPipe } from './filter-pipes/admin-getAllVet-page-filter/admin-getall-vet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginForUserComponent,
    LoginForVetComponent,
    SorguComponent,
    HomePageForVetComponent,
    HomePageForUserComponent,
    LoginForUserBodyComponent,
    VetCopyrightComponent,
    FooterComponent,
    NavbarComponent,


    UserMeetingComponent,
    UserProfileComponent,
    UserSearchClinicComponent,
    VetMeetingComponent,
    VetProfileComponent,
    VetSearchComponent,
    CopyrightComponent,
    VetMeetFilterPipe,
    MeetingListComponent,
    UserCanceledMeetingComponent,
    UserMeetPipe,
    VetCountryPipe,
    VetNameSearchPipe,
    UserRecommendedComponent,
    VetRecommendedComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    CreateAdminComponent,
    AdminCommentManagmentComponent,
    AdminMeetingManagmentComponent,
    AdminRecommendedManagmentComponent,
    AdminCancelledMeetingManagmentComponent,
    AdminUserManagmentComponent,
    AdminVetManagmentComponent,
    CommentManagerPipe,
    TodoComponent,
    InProgressComponent,
    CompleteComponent,
    AdminCancelledPipe,
    MeetingControlPipe,
    AdminGetallUserPipe,
    AdminGetallVetPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatInputModule,

    StoreModule.forRoot({ message: simpleReducer }),
    VetRoutingModule,
    NgbModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
