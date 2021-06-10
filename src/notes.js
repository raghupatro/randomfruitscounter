/*
children is a special prop of react components
which has data which is passed in between the
opening and closing tags of any react component tag


debugging...

react dev tools
$r, $0, ... lets us use the particular component


props vs state

props is the data which we give that component

state is the data which is private to the component
other components cannot see the state of any component

rule of thumb:
the component that owns a piece of the state, should be
the one modifying it

thus to modify the state of another component from the current
component, we need to raise an event which will be handled by
the component having the state

we cannot access the key property as react uses it internally
thus we need to pass another object having the id

we should pass the entire object that we need to access in the child component
inside the child component, so that we need not to add it again
and again when we change/add variables in the object

we should have a single source of truth...
for this we need to remove the local state
and use only a single copy of the variable found in the parent component

controlled compoinents are components which do not have any state of itself
these components use state variables of their parents
they raise events whenever a change in state is req

spread operator "..." van be used when we need to assign an array to a new object

having multiple components in sync

if there is no parent child relaionship between two classes
and we need to keep the comonents in sync, we need to
lift the state up, i.e. move the state variables into a parent class

we should destrucuture our components so that we need not write
this.props.sdofjisadf.... everytime

lifecycle hooks
are fns which react gives us to check the components
during different part of their lifecycles

mount
phase when components are made
    constructor, render, componentDidMount

update
phase when any component is updated
    render, componentDidUpdate

unmount
phase when any component is about to be removed
    componentDidUnmount


rendering occurs recursively till all the children are rendered


on state changes, entire component tree will be re-rendered
then compares it to old virtual dom
and accordingly updates the real dom



*/
