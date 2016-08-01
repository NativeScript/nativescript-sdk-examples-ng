// >> using-async-pipe-code
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable as RxObservable } from 'rxjs/Observable';

export class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: 'list-test-async',
    styleUrls:["listview/using-async-pipe/using-async-pipe.component.css"],    
    template: `
    <GridLayout exampleTitle>
        <ListView [items]="myItems | async">
            <template let-item="item" let-i="index" let-odd="odd" let-even="even">
                <StackLayout [class.odd]="odd" [class.even]="even" orientation="horizontal">
                    <Label [text]='(i + 1) +".) "' fontSize="14"></Label>
                    <Label [text]='item.name'></Label>
                </StackLayout>
            </template>
        </ListView>
    </GridLayout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingAsyncPipeComponent {
    public myItems: RxObservable<Array<DataItem>>;

    constructor() {
        var items = [];
        for (var i = 0; i < 3; i++) {
            items.push(new DataItem(i, "data item " + i));
        }

        var subscr;
        this.myItems = RxObservable.create(subscriber => {
            subscr = subscriber;
            subscriber.next(items);
            return function () {
                console.log("Unsubscribe called!!!");
            }
        });

        let counter = 2;
        let intervalId = setInterval(() => {
            counter++;
            items.push(new DataItem(counter + 1, "data item"));
            subscr.next(items);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 15000);
    }
}
// << using-async-pipe-code