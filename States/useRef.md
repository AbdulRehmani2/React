# useRef

useRef hook allows you to create a value which persists between renders. 

It can store a mutable value which on change does not cause a re-render.

It returns an object with attribute current and the value which is passed to it.
```
const count = useRef(0);

useEffect(() => {
    count.current = count.current + 1
});
```
This code will count the number of renders that occur.

It is also used to select DOM elements directly.
```
const inputElement = useRef();

const focusInput = () => {
    inputElement.current.focus();
};

return (
    <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
    </>
);