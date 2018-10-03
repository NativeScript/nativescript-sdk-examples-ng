Modal Dialog Navigation

@NgModule config
<snippet id='ngmodule-config'/>

Defining the `page-router-outlet` for the modal view's main component and navigating to the first inner modal view

<snippet id='main-modal-view'/>
<snippet id='main-modal-view-code'/>

Definig modal view innner component's routes

<snippet id='modal-view-routes'/>

Defining the first inner modal view

<snippet id='first-modal-view'/>
<snippet id='first-modal-view-code'/>

> NB: We can navigate to the second component inside the Modal view while defining its relative path(e.g. `"../second-modal"`). To navigate relatively, we should use ActiveRouter module as it is demonstrated in the example above. 

Defining the second inner modal view

<snippet id='second-modal-view'/>
<snippet id='second-modal-view-code'/>

Opening the modal view

<snippet id='opening-modal-view'/>