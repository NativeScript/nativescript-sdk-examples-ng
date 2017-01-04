Common scenario is to use nested router outlets. In NativeScript + Angular-2 you can
nest `router-outlet` within other `router-outlet` or within `page-router-outlet`.

Module
```
    export const routerConfig = [
        {
            path: "",
            component: RoutingExamplesComponent
        },
        {
            path: "nested-routers",
            component: NestedRoutersComponent,
            children: [
                { path: "first", component: SubRouteOneComponent },
                { path: "second", component: SubRouteTwoComponent }
            ]
        }
    ];
```

HTML
<snippet id='nested-router-html'/>
