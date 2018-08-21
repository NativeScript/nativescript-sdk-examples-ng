In order to use the HTTP the first thing to do is to declare our NativeScript wrapper in the respective module file

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

Finally, you can provide the service in the component. Note that the services should be explicitly declared in `providers`
and then should be provided as an argument in the component's constructor
<snippet id='http-get-component'/>