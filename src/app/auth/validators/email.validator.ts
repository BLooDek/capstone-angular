import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { first, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { IAuthStatus } from '../models/auth.interface';

export class UsernameValidator {
  static createValidator(_authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return _authService.checkIfEmailExist(control.value).pipe(
        map((result: IAuthStatus) =>
          result.detail === 'true' ? { emailAlreadyExist: true } : null
        ),
        first()
      );
    };
  }
}
