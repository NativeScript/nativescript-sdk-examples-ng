// >> directive-code  
import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[unless]' })

export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>, private container: ViewContainerRef) { 

  }
  
  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.container.createEmbeddedView(this.templateRef);
    } else {
      this.container.clear();
    }
  }
}
// << directive-code  