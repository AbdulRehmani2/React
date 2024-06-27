# useEffect
Components in React have a lifecycle. This includes:
1. **Mounting:**
   When the component is first created.

2. **Updating:**
   When any state change occurs in the component, it rerenders.
3. **Unmounting:**
   When the component is destroyed and is no longer shown on the UI.

useEffect gives us a way to run a function or a piece of code when any of these events happen.
useEffect takes our function as the first argument and a dependency array as the second argument. If the dependency array is empty, the useEffect function is run only once, when the component is mounted. If there is a value inside the array, the function runs whenever that value changes. The first parameter of useEffect can also return a function. This function will run when the component is destroyed.
```
const [count, setCount] = useState(0)

useEffect(() => {
    //function logic
    return () => {
        //cleanup logic
    }
}, [count])