In order to use the HTTP the first thing to do is to declare our NativeScript wrapper in the respective module file

```
import { NativeScriptHttpModule } from "nativescript-angular/http";
...
@NgModule({
    imports: [
        NativeScriptHttpModule
    ]
```

Creating a service file to keep our HTTP logic separated from our component file (which does not need to know how we fetch our data)
<snippet id="http-get-service"/>

Finally, we can provide our service in our component. Note that the services should be explicitly declared ```providers: [MyHttpService]```
and then should be provided as an argument in our component's constructor
<snippet id="http-get-component"/>