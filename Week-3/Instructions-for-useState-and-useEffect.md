# Common useState and useEffect mistakes

## Updating state
State should not be changed like this:
```
setCount(count + 1)
setCount(count + 1) 
setCount(count + 1)
```
All of these statements will only increase the count by 1 because count has not been updated yet. 

It should be done like:
```
setCount((prev) => prev + 1)
setCount((prev) => prev + 1)
setCount((prev) => prev + 1)
```

This will work because it always uses the updated value of state.

## Using Hooks
useState and useEffect hooks should only be called at the top of the function.

## Updating objects in state
Updating objects in state cannot be done like this:
```
const [user, setUser] = useState({
    name = "Anon", 
    age = 20;
})

setUser(user.name = value);
```
This will not work as intended as the function will cannot update a single one attribute of the function.
```
setUser({
    name : "Anon1";
})
```
It will delete the other attributes of the object and only retain the 'name' attribute.

So the correct way of doing this is using the spread operator.
```
setUser({
    …user, 
    name : "Anon1";
})
```
It can also be done as:
```
setUser(prev => ({
    …prev, 
    name: "Anon1";
}))
```

## Getting data from multiple inputs
Consider you have a form with multiple inputs. You will have to create multiple states for each and every one of the fields. Instead, a simple way of doing this is to create a state object.
```
const [form, setForm) = useState({
    Firstname: "",
    Lastname: "",
    Age: 0;
})
```

Inorder to update it you can use the previous method of updating objects. 

Now, you will have to create separate update functions for every input. Instead of doing that, you can set 'name' attribute for the inputs and have the same value as the keys in the object.

Such as firstname input will have an attribute name="Firstname". You can use this name from the event object inside the single handle function and get the value and update only that value.
```
setForm({
    …form, 
    [e.target.name] : value;
})
```

## Deriving value from state
Now if we have a state and a value which changes with the state, we have to create another state and a useEffect for it.

Consider that I have a quantity state and a price variable. In order to show total price on the page, I have to create a state for totalPrice and also create a useEffect function with quantity state in the dependency array.

```
const [quantity, setQuantity] = useState(1)
const [totalPrice, setTotalPrice] = useState(0)

useEffect(() => {
    setTotalPrice(quantity * price)
}, [quantity])
```

If you have a state and you have to calculate or derive a value from that state, you do not need to create a new state because as the state changes, it causes a rerender and the value derived from that state also changes.

So the above code can be just this:
```
const [quantity, setQuantity] = useState(1)
const totalPrice = quantity * price
```

## Rerendering in React
In Javascript, if you have two variables having same values, they will be equal to each other but if you have two object with the same value, they will not be equal to each other. This is because, when comparing primitive variables to each others they are compared on the basis of value, while objects or arrays are compared on the basis of reference, which is always different.

So when you change the value of a state, a rerender occurs. But if the state is a primitive and the value of the state does not change, no rerender occurs.
```
const [isDone, setIsDone] = useState(true)

setIsDone(true)
```

As the function does not change the value of the state, rerender does not occur.

On the other hand, in case of an object as a state, even if the function is called with the same value, the component will rerender.
```
const [price, setPrice] = useState({
    number: 100, 
    totalPrice: true;
})

setPrice({
    number: 100, 
    totalPrice:true;
})
```
In this case, rerender will occur.

If you have an associated useEffect function with this state, it will rerun every time there is a change. So, it is better to use only that attribute of the object in the dependency array on which the useEffect depends.

## Fetching data
Consider you are fetching data from an API in a useEffect function and are displaying it. As the useEffect function runs after the render, you have not received any data yet and will get an error when you try to display that data. So, '?' operator can be used to indicate that if the object is undefined or null, don’t throw an error.
```
<p>user?.name</p>
```
Also we can implement a loading screen while the data is being fetched by creating a state and changing it after the data has been fetched and displaying data accordingly.

## Typescript
Typescript can help us a lot with common errors and bugs with Javascript by providing us a static typing option. 

In case of useState, Typescript can infer the type of state by using the initial value. But if the initial value is not a number or a string etc, You have to explicitly define that type.

For example, we are fetching data and storing into a variable User, in typescript, It should be done as,
```
type User = {
    Name: string,
    Age: number,
    Address: string;
}

const [User, setUser] = useState<User | null>(null)
```

## Custom Hooks
If you have same logic involving react hooks used multiple times in your code, you can use a custom hook to define it once and use the hook multiple times.

A custom hook is just like a function. A convention is to put 'use' and a capital letter after it in the name of the custom hook.

## Types of components
In NextJS, there are two types of components, server components and client components. 
By default, all the components are server components. 

Server components cannot interact with window object and cannot use hooks. These can only be used inside the client component. 

All the components inside a client component implicitly become client components.

## Using useEffect properly

Consider we are updating a state based on a function such as setInterval, if we write it as:
```
useEffect(() => {
    setInterval(() => {
        setValue(value + 1)
        }, 1000)
    }, [])
```
This code will not work because Javascript will create the value state at the start and it will be 1. Running this function multiple times will not change the value as it has not yet been updated. 
There are two methods of doing this:
```
useEffect(() => {
    const id = setInterval(() => {
        setValue(value + 1)
        }, 1000)
    return () => {clearInterval(id)}
    }, [value])
```
This will create a new function every time the value of state is changed. The dispose function here is very important. If it is left out, it can cause errors and bugs.

The other method is simply using the prev value of the state to update it as it will always take the most updated value of the state.

## Fetching multiple times

Consider you have a button which fetches some data from an API and show it on the screen. It can be implemented like this:
```
const [id, setId] = useState(0)

<button onClick={() => setId(prev => prev + 1)}>Fetch next</button>

useEffect(() => {
    fetch(…)
    //Resolving Promises
    }, [id])
```
But what if the button is pressed multiple times? 

Every time the button is pressed a call to fetch is generated and that data is shown on the screen. When the button is pressed multiple times, the data quickly flashes and all the calls complete before you see the data fetched by the last one. This can be prevented by using AbortController.
```
useEffect(() => {
    const controller = new AbortController()
    
    fetch('url', {signal : controller.signal;})
    //Resolving Promises
    return () => controller.abort()
}, [id])
```