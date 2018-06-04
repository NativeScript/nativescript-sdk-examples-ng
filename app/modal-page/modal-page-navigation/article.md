Modal Dialog Navigation

@NgModule config
<snippet id='ngmodule-config'/>

Defining the `page-router-outlet` for the modal page's main component and navigating to the first inner modal page

<snippet id='main-modal-page'/>
<snippet id='main-modal-page-code'/>

Defining the first inner modal page

<snippet id='first-modal-page'/>
<snippet id='first-modal-page-code'/>

> NB: We can navigate to the second component inside the Modal Page while defining its relative path(e.g. `"../second-modal"`). To navigate relatively, we should use ActiveRouter module as it is demonstrated in the example above. 

Defining the second inner modal page

<snippet id='second-modal-page'/>
<snippet id='second-modal-page-code'/>

Opening the modal page

<snippet id='opening-modal-page'/>