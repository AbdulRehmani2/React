# useState
useState is one of the most important hooks in React. It is used to handle reactive data. The data that changes in React is called state. When the state is changed, the UI is rerendered to display that data.

The useState has an optional parameter which becomes the initial value of the state. It return an array with two values, first is the reactive data and second is the setter function.

The value of the state can only be changed by the setter function, which then causes a rerender and the updated data is shown on the page.
```
const [count, setCount] = useState(0)

setCount(count + 1)
```