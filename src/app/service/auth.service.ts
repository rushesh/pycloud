import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authToken :any;
user:any;
  constructor(private http: HttpClient) { }
  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(
      'http://localhost:3000/users/register',
      user,
      {headers:headers , responseType : 'json'}
      );
      // .pipe(map((response: Response) => console.log(response.json())));
      
      // .subscribe( (data) => console.log(data),
      // (error) => console.log(error));
  }
  logincheck(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    
      return this.http.post(
        'http://localhost:3000/users/authenticate',
        user,
        {headers:headers , responseType : 'json'}
        );
    }
}