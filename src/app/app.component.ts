import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptors';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    let token = this.authService.getToken();

    if(token !== ''){
      this.isLoggedIn = true;  
    }
  }

  onLogIn() : void {
    this.isLoggedIn = true;
  }

  onLogOut() : void {
    this.isLoggedIn = false;
    this.authService.clearToken;
  }

  onUserAuthentication() : void {
    let token = this.authService.getToken();

    if(token !== ''){
      this.isLoggedIn = true;  
    }
  }
}
