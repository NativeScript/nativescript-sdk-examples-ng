In order to use the HTTP the first thing to do is to import our NativeScript wrapper in the respective module file.

```
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
...
@NgModule({
    imports: [
        NativeScriptHttpClientModule
    ]
```

Using the GET method by creating a service file to keep the HTTP logic separated from the component file (which does not need to know details on how you fetch the data).
<snippet id='http-get-service'/>

Provide the service in the component. Declare the service (either in the `providers` array of your module/component or by using `provideIn` - learn more about Angular providers [here](https://angular.io/guide/providers)) and inject it in the component's constructor.
<snippet id='http-get-component'/>