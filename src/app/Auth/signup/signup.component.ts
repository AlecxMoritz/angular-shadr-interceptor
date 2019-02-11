import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('screenname') screennameInput: ElementRef;
  @ViewChild('password') passwordInput: ElementRef;
  @ViewChild('fullname') fullnameInput: ElementRef;
  @ViewChild('email') emailInput: ElementRef;

  @Output() signUpOccured = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  onSignUp() {
    let userInfo = {
      screenname: this.screennameInput.nativeElement.value,
      password: this.passwordInput.nativeElement.value,
      name: this.fullnameInput.nativeElement.value,
      email: this.emailInput.nativeElement.value,
    }

    this.authService.signUp(userInfo).subscribe(data => {
      this.authService.storeToken(data.sessionToken);
      this.signUpOccured.emit();
    })
  }
}
