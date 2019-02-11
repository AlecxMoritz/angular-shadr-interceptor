import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthComponent } from './Auth/auth/auth.component';
import { AuthService } from './services/auth.service';
import { ShadeFeedComponent } from './Shades/shade-feed/shade-feed.component';
import { ShadeHomeComponent } from './Shades/shade-home/shade-home.component';
import { ShadePostComponent } from './Shades/shade-post/shade-post.component';
import { ShadeEditComponent } from './Shades/shade-edit/shade-edit.component';
import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor';
import { ShadeService } from './services/shade.service';
import { ShadeComponent } from './Shades/shade/shade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    ShadeFeedComponent,
    ShadeHomeComponent,
    ShadePostComponent,
    ShadeEditComponent,
    ShadeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ 
    HttpClient, 
    AuthService,
    ShadeService,
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
