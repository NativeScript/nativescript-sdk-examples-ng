This example demonstrates how to use OnChanges to trigger updates in child components for data passed from parent component.
The data is pased with `@Input` and the change is triggered via``ngOnChanges` with injecting `SimpleChanges` in the child's constructor.

TypeScript
<snippet id='update-child-component-code'/>
