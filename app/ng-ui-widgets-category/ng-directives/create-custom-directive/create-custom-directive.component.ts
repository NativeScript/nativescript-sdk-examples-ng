// >> custom-directive-code
import { Component, Directive, ViewContainerRef, TemplateRef, Inject } from "@angular/core";
import { IDevice, platformNames } from "@nativescript/core";
import { DeviceToken } from "@nativescript/angular";

@Directive({ selector: "[sdkIfAndroid]" })
export class IfAndroidDirective {
    constructor( @Inject(DeviceToken) device: IDevice, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Directive({ selector: "[sdkIfIos]" })
export class IfIosDirective {
    constructor( @Inject(DeviceToken) device: IDevice, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
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
