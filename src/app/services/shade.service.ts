import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class ShadeService {
    private dbUrl: string = 'https://am-shadrserver.herokuapp.com/shade';
    constructor(private http: HttpClient) { }
    // get shades

    getShades(): Observable<any> {
        let reqUrl: string = this.dbUrl + '/all';

        return this.http.get(reqUrl);
    }
    // post shade
    postShade(shade: any): Observable<any> {
        let reqUrl: string = this.dbUrl + '/new';

        let body = {
            shade: shade
        }

        return this.http.post<any>(reqUrl, body);
    }
}