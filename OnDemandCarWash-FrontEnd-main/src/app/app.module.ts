import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AllOrdersComponent } from './OrderAux/all-orders/all-orders.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { WasherDashboardComponent } from './Washer/washer-dashboard/washer-dashboard.component';
import { AddOrderComponent } from './OrderAux/add-order/add-order.component';
import { AngularMaterialModule } from './angularMaterial/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { UpdateOrderComponent } from './OrderAux/update-order/update-order.component';
import { UnassignedOrdersComponent } from './OrderAux/unassigned-orders/unassigned-orders.component';
import { CancelledOrdersComponent } from './OrderAux/cancelled-orders/cancelled-orders.component';
import { PendingOrdersComponent } from './OrderAux/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './OrderAux/completed-orders/completed-orders.component';
import { AdminSidebarComponent } from './Admin/admin-sidebar/admin-sidebar.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { UserSidebarComponent } from './User/user-sidebar/user-sidebar.component';
import { WasherSidebarComponent } from './Washer/washer-sidebar/washer-sidebar.component';
import { GetallUsersComponent } from './Admin/getall-users/getall-users.component';
import { GetallWashersComponent } from './Admin/getall-washers/getall-washers.component';
import { AddUserOrderComponent } from './User/add-user-order/add-user-order.component';
import { AddWashpackComponent } from './Admin/add-washpack/add-washpack.component';
import { AllWashPackComponent } from './Admin/all-wash-pack/all-wash-pack.component';
import { UpdateWashpackComponent } from './Admin/update-washpack/update-washpack.component';
import { MyOrdersComponent } from './User/my-orders/my-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MywasherOrdersComponent } from './Washer/mywasher-orders/mywasher-orders.component';
import { UserWpViewComponent } from './User/user-wp-view/user-wp-view.component';
import { UnassignedWasherViewComponent } from './Washer/unassigned-washer-view/unassigned-washer-view.component';
import { WasherWpViewComponent } from './Washer/washer-wp-view/washer-wp-view.component';
import { PaymentComponent } from './payment/payment.component';
import { RatingsComponent } from './Washer/ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    AboutusComponent,
    NavbarComponent,
    AdminDashboardComponent,
    AllOrdersComponent,
    UserDashboardComponent,
    WasherDashboardComponent,
    AddOrderComponent,
    UpdateOrderComponent,
    UnassignedOrdersComponent,
    CancelledOrdersComponent,
    PendingOrdersComponent,
    CompletedOrdersComponent,
    AdminSidebarComponent,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    NotAuthComponent,
    UserSidebarComponent,
    WasherSidebarComponent,
    GetallUsersComponent,
    GetallWashersComponent,
    AddUserOrderComponent,
    AddWashpackComponent,
    AllWashPackComponent,
    UpdateWashpackComponent,
    MyOrdersComponent,
    MyProfileComponent,
    MywasherOrdersComponent,
    UserWpViewComponent,
    UnassignedWasherViewComponent,
    WasherWpViewComponent,
    PaymentComponent,
    RatingsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
