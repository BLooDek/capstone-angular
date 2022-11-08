import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Injectable()
export class SpinnerService {
  private overlayRef: OverlayRef;
  // = this.cdkOverlayCreate();

  constructor(private overlay: Overlay) {}
  spinnerAttach(): void {
    this.overlayRef = this.cdkOverlayCreate();
    this.overlayRef.attach(new ComponentPortal(SpinnerComponent));
  }
  spinnerDetach(): void {
    this.overlayRef.detach();
    this.overlayRef.dispose();
  }

  private cdkOverlayCreate(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }
}
