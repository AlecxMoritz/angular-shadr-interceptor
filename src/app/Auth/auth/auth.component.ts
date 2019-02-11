import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signUp = false;
  @Output() userAuthenticated = new EventEmitter()
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  toggle() : void {
    this.signUp = !this.signUp;
  }

  onAuth() {
    console.log('User Authenticated')
    this.userAuthenticated.emit();
  }
}