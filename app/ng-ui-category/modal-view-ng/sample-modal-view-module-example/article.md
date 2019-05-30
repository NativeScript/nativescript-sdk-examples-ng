Modal Dialog

**_app.module.ts_**
<snippet id='ngmodule-config'/>

The host component (**_sample-modal-view-module.example.html_**) from which we will open the different modal pages (e.g., **_modal-view.html_**).

**_sample-modal-view-module.example.html_**
<snippet id='add-modal-dialog-host'/>

Passing parameters from the opened modal view.

**_modal-view.html_** and **_modal-view.ts_**
<snippet id='passing-parameters-html'/>
<snippet id='passing-parameters'/>

Receiving the result from the modal page.
<snippet id='returning-result'/>
