import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {first, Observable, switchMap} from 'rxjs';
import {IModuleState} from "../state/module.state";
import {Store} from "@ngrx/store";
import {selectToken} from "../selectors/auth.selectors";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization'
  private AUTH_TOKEN = (token) => `Token ${token}`
  constructor(private _store: Store<IModuleState>) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    return this._store.select(selectToken).pipe(
      first(),
      switchMap(token => {
        const authReq = !!token ? this.addAuthToken(request, token) : request;
        return next.handle(authReq);
      }),
    );

  }

  private addAuthToken(request: HttpRequest<any>, token): HttpRequest<any> {
    // if (request.url.endsWith('register/') || request.url.endsWith('login/')) {
    //   return request;
    // } TODO: probably handled by token?null

    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, this.AUTH_TOKEN(token))
    });
  }
}
