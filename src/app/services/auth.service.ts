import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json'
    })
}

@Injectable()

export class AuthService {
    private dbUrl = 'https://am-shadrserver.herokuapp.com/user';
    
    constructor(private http: HttpClient) { }
    
    logIn(userInfo: any) : Observable<any> {
        let body = {
            user: userInfo
        };

        let loginUrl = this.dbUrl + '/login'
        return this.http.post<any>(loginUrl, body, httpOptions);
    }

    signUp(userInfo: any)  {
        let body = {
            user: userInfo
        }
        let signUpUrl = this.dbUrl + '/signup';

        return this.http.post<any>(signUpUrl, body, httpOptions);

    }

    storeToken(token: string) {
        localStorage.setItem('token', token);
    }


    getToken() : string {
        let token = localStorage.getItem('token');
        return token;
    }

    clearToken() {
        localStorage.clear();
    }
}