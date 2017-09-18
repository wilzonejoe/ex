import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = '';
  password = '';
  url = 'https://trixd5mgs7.execute-api.us-east-1.amazonaws.com/prod';
  headers = new Headers();
  constructor(private http: Http) { }

  login(username: string, password: string): Promise<boolean> {
    return this.http.post(this.url, null)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
