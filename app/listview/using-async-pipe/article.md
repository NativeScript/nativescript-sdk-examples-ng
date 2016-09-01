An Angular pipe is a simple display-value transformation that can be declared in HTML. 
A pipe takes an input and transforms it to a desired output. One of the built-in Angular pipes is very commonly used with ListView 
like controls. This is the async pipe. The input of this pipe is either Promise<Array> or Observable<Array> (Observable actually 
stands for RxJS.Observable). This pipe subscribes to the observable and returns the value inside of it as a property value. 
The following is a simple example of using async pipe with the NativeScript-Angular ListView.

<snippet id='using-async-pipe-code'/>