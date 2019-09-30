The ScrollableView component allows you to display a scrollable area in your application, which has content that is larger than its bounds.
The ScrollView has an `orientation` property, which allows you to set different orientations to the view:

> **Important:** Using `ScrollView` in `ScrollView`, `ListView` in a `ScrollView` or `ScrollView` in the `ListView`'s items can lead to a **poor** user interface performance and can reflect the user experience. For avoiding those issues, we should specify the height explicitly for the `ListView` in the scenario when the `ListView` is nested in `ScrollView`, the `ScrollView`'s height - when the component is used inside the `ListView` and the child ScrollView's height in `ScrollView` in `ScrollView` scenario. 
Example 1 (`ListView` in `ScrollView`): 
```HTML

<ScrollView>
    <StackLayout>
        <!-- When nesting ListView in ScrollView, make sure that the nested scrollable component has an explicitly set height -->
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
            <!-- When nesting ScrollView in ListView, make sure that the nested scrollable component has an explicitly set height -->
            <ScrollView height="150" >
                <!-- ....... -->
            </ScrollView>
        </StackLayout>
    </ng-template>
</ListView>
```
Example 3 (`ScrollView` in `ScrollView`): 
```HTML
<ScrollView>
    <StackLayout>
        <!-- When nesting ScrollView, make sure that the nested scrollable component has an explicitly set height -->
        <ScrollView height="150" >
            <!-- ....... -->
        </ScrollView>
    </StackLayout>
</ScrollView>
```
