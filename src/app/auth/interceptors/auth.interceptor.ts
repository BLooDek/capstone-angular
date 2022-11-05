import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { first, Observable, switchMap } from 'rxjs';
import { IModuleState } from '../state/module.state';
import { Store } from '@ngrx/store';
import { selectToken } from '../selectors/auth.selectors';
import { AUTH_HEADER, AUTH_TOKEN } from '../contants/auth.const';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _store: Store<IModuleState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    return this._store.select(selectToken).pipe(
      first(),
      switchMap((token) => {
        const authReq = !!token
          ? AuthInterceptor.addAuthToken(request, token)
          : request;
        return next.handle(authReq);
      })
    );
  }

  private static addAuthToken(
    request: HttpRequest<any>,
    token
  ): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set(AUTH_HEADER, AUTH_TOKEN(token)),
    });
  }
}
