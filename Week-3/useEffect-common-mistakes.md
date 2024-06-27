# Mistakes causing infinite loop in useEffecct

## Forgetting dependency array
Forgetting to write dependency array can cause an infinite loop because the function runs again and again.
```
const [count, setCount] = useState(0)

useEffect(() => {
    setCount(count + 1);
})
```

## Non-primitives inside dependency array
Non-primitives like arrays and objects when used inside the dependency array can cause an infinite loop. This is because in Javascript, their variable name points to the reference, the location in memory. When a rerender occurs, the reference changes and the useEffect runs again, which in turn causes a rerender. This step repeats again and again in an infinite loop.
```
const [count, setCount] = useState(0)

const obj = {
    a: 1;
}

useEffect(() => {
    setCount(count + 1);
}, [obj])
```
This can be fixed by using useRef hook.
```
const [count, setCount] = useState(0)

const obj = useRef({
    a: 1;
})

useEffect(() => {
    setCount(count + 1);
}, [obj])
```

## Functions inside dependency array
Using functions inside dependency array can also cause an infinite loop as they are also a reference value.
```
function handleClick()
{
    //function logic
}

useEffect(() => {
    //changing state
}, [handleClick])
```
This loop can be prevented by using useCallback hook.
```
const handleClick = useCallback(() => {
    //function logic
}, [])

useEffect(() => {
    //changing state
}, [handleClick])
```