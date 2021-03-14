In order to use the Angular's `HttpClient` module the first thing to do is to import our NativeScript wrapper in the respective module file. 

```TypeScript
import { NativeScriptHttpClientModule } from "@nativescript/angular";

@NgModule({
    imports: [
        NativeScriptHttpClientModule
    ]
```

> **Note:** The `HttpClient` is Angular module that comes from `@angular/common/http`. However, you will need to import the NativeScript wrapper (`NativeScriptHttpClientModule`) to be able to work with the `HttpClient` module.
