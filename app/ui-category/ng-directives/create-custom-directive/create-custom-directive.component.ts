// >> custom-directive-code
import { Component, Directive, ViewContainerRef, TemplateRef, Inject } from "@angular/core";
import { Device, platformNames } from "platform";
import { DEVICE } from "nativescript-angular/platform-providers";

@Directive({ selector: "[sdkIfAndroid]" })
export class IfAndroidDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Directive({ selector: "[sdkIfIos]" })
export class IfIosDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Component({
    moduleId: module.id,
    templateUrl: "./create-custom-directive.component.html",
})
export class CreateCustomDirectiveExampleComponent {
}
// << custom-directive-code
