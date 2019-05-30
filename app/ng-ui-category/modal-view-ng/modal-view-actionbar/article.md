The following example is demonstrating how to create a modal page with `ActionBar`. The **_main-view.component_** is the page from which, you will open the root modal (**_modal-root.component_**). The root modal contains a `page-router-outlet` and has a default navigation to **_modal-view.component_** while using the children routing configuration.

**_main-view.component.html_** and **_main-view.component.ts_**
<snippet id='main-view-html'/>
<snippet id='main-view-code'/>

Routing configuration file (**_modal-view-examples.module.ts_**) which sets the children routes (in this example the `modal-view` path).
<snippet id='modal-view-routes-actionbar'/>

**_modal-root.component.html_** and **_modal-root.component.ts_** contains `page-router-outlet` with default navigation via `modal-view` path.
<snippet id='modal-root-html'/>
<snippet id='modal-root-code'/>

**_modal-view.component.html_** and **_modal-view.component.ts_** (the default `modal-view` path). The modal contains `ActionBar`.
<snippet id='modal-view-actionbar-html'/>
<snippet id='modal-view-actionbar-code'/>
