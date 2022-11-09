import { Injectable } from '@angular/core';

@Injectable()
export class ConstService {
  //backend on local
  // API_URL = 'http://127.0.0.1:8000/api/v1/'
  // heroku
  API_URL = 'https://hidden-forest-48615.herokuapp.com/api/v1/';
}
