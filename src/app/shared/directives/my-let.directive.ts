import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface NgLetContext<T> {
  myLet: T;
  $implicit: T;
}

@Directive({
  selector: '[myLet]',
})
export class MyLetDirective<T> {
  private context: NgLetContext<T | null> = { myLet: null, $implicit: null };
  private hasView: boolean = false;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<NgLetContext<T>>
  ) {}

  @Input()
  set myLet(value: T) {
    this.context.myLet = value;
    this.context.$implicit = value;
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);
      this.hasView = true;
    }
  }
}
