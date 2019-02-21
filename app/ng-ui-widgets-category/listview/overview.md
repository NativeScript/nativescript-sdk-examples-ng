Using a ListView control inside Angular app requires some special attention due to the complexity of the NativeScript ListView control, with custom item templates, bindings and so on. 

The NativeScript-angular plugin provides a custom Angular component which simplifies the way native ListView is used. 

> Note: Using the `ListView` component inside a `ScrollView` or `ScrollView` inside the `ListView`'s items can lead to a poor user interface performance and can reflect the user experience. For avoiding those issues, we should specify the height explicitly for the ListView in the scenario when the ListView is nested in `ScrollView` and the `ScrollView`'s height - when the component is used inside the `ListView`. 
Example 1 (`ListView` in `ScrollView`): 
```HTML
<ScrollView>
    <StackLayout>
        <ListView height="150" [items]="countries">
            <ng-template let-country="item" let-i="index" let-odd="odd" let-even="even">
                <!-- ....... -->
            </ng-template>
        </ListView>
    </StackLayout>
</ScrollView>
```
Example 2 (`ScrollView` in `ListView`): 
```HTML
<ListView [items]="countries">
    <ng-template let-country="item" let-i="index" let-odd="odd" let-even="even">
        <StackLayout>
            <ScrollView height="150" >
                <!-- ....... -->
            </ScrollView>
        </StackLayout>
    </ng-template>
</ListView>
```
