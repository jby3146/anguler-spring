import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './component/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignService } from './service/rest-api/sign.service';
import { MyinfoService } from './service/rest-api/myinfo.service';
import { LogoutComponent } from './component/logout/logout.component';
import { MyinfoComponent } from './component/myinfo/myinfo.component';
import { HttpRequestInterceptorService } from './service/rest-api/common/http-request-interceptor.service';
import { BoardComponent } from './component/board/board.component';
import { BoardService } from './service/rest-api/board.service';
import { PostComponent } from './component/board/post.component';
import { PostViewComponent } from './component/board/post-view.component';
import { PostModifyComponent } from './component/board/post-modify.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    MyinfoComponent,
    BoardComponent,
    PostComponent,
    PostViewComponent,
    PostModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true,
    },
    SignService,
    MyinfoService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }