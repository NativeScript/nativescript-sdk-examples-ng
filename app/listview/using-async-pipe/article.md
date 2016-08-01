Generally according to Angular documentation pipe is a simple display-value transformation that can be declared in HTML. 
Pipe takes an input and transforms it to a desired output. One of the built-in Angular pipes is very commonly used with ListView 
like controls. This is the async pipe. The input of this pipe is either Promise<Array> or Observable<Array> (Observable actually 
stands for RxJS.Observable. What this pipe do is to subscribe for the observable and return the value inside it as property value. 
Following is a simple example of using async pipe with NativeScript-Angular ListView.

<snippet id='using-async-pipe-code'/>