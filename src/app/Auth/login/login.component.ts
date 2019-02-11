import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('screenname') screennameInput: ElementRef;
  @ViewChild('password') passwordInput: ElementRef;
  @Output() loginOccured = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogIn() {
    let userInfo = {
      screenname: this.screennameInput.nativeElement.value,
      password: this.passwordInput.nativeElement.value
    };

    this.authService.logIn(userInfo).subscribe(data => {
      this.authService.storeToken(data.sessionToken);
      this.loginOccured.emit();
    })
  }
}