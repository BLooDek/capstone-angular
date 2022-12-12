import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TOKEN_KEY } from '../contants/auth.const';

@Injectable()
export class LocalTokenService {
  constructor(private _http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}
