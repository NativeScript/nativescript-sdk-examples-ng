The following example demonstrates how to enable navigaiton within a modal page. First we have a component which opens the main root modal. The root modal contains a `page-router-outlet` which has a default navigaiton via the `modal` route (loads the **_home-modal-view-content.component_**). The router outlet has its own routing table (**_modal-view-examples.module.ts_**) and can navigate to the `second-modal` route within the root modal.

Providing the `ModalDialogService` in `@NgModule` config.
**_app.module.ts_** 
<snippet id='ngmodule-config'/>

The component (**_modal-view-navigation.component_**) which opens the root modal view (**_home-modal-view.component_**).

**_modal-view-navigation.component.html_** and **_modal-view-navigation.component.ts**
<snippet id='opening-modal-view-html'/>
<snippet id='opening-modal-view'/>

Routing configuration file (**_modal-view-examples.module.ts_**) which sets the children routes (in this example the `modal` and `second-modal` path).
<snippet id='modal-view-routes'/>

The root modal component contains the `page-router-outlet` and has a default navigation to the first inner modal view.

**_home-modal-view.component.html_** and **_home-modal-view.component.ts_**
<snippet id='main-modal-view'/>
<snippet id='main-modal-view-code'/>

Defining the first inner modal view (the `modal` route).

**_home-modal-view-content.component.html_** and **_home-modal-view-content.component.ts_**
<snippet id='first-modal-view'/>
<snippet id='first-modal-view-code'/>

> **Note:** We can navigate to the second component inside the Modal view while defining its relative path(e.g. `"../second-modal"`). To navigate relatively, we should use ActiveRouter module as it is demonstrated in the example above. 

Defining the first inner modal view (the `second-modal` route).

**_second-modal-view-content.component.html_** and **_second-modal-view-content.component.ts_**
<snippet id='second-modal-view'/>
<snippet id='second-modal-view-code'/>

