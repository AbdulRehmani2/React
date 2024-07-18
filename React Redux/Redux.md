# Redux
Redux is a predictable state container for JavaScript apps.
Redux is for JavaScript, not for React, it can be used with any other framework and even vanilla JS.
As we know, state is the reactive data of the application and Redux is a container for state.
In redux, all state changes are easily trackable.
## Why do we need Redux?
Consider we have a tree of components. A component has a state but a sibling component need to use that state. As a result, the state will be moved to the parent component. But now, what is the parent component's sibling wants to access the state, we will have to move the state to an even higher component and so on.
Another scenerio is if a child component need to use state, the state has to be passed from the top components to this component. In this scenerio, the components which do not have any need for the state need to contain it in order to pass it to the next component. It is called **Prop Drilling**.
## What does Redux do?
Redux stores the state outside the components. Any component that need to access the state can use that container.

# Setting Up Project
Redux can be install by using the command
```
npm install redux --save
```

# Three Core Concepts
## Store
Store holds the state of your application.
## Action
Action describes the changes in the application.
## Reducer
Reducer ties Store and Action togather. It carries out the state transition depending on the action.

# Three Priciples
## First Principle
The state of your whole applications should be stored in a singular store.
## Second Principle
State is read only. To update the state of your app, you need to let Redux about that with an action.
## Third Principle
To specify how to state changes, you write pure reducers.
Reducer - (previousState, action) => newState
```
const reducer = (state, action) => 
{
    switch (action.type)
    {
        case ADD_COUNT:
        return {
            count: state.count + 1
        }
    }
}
```

# Action
Actions are the only way to interact with the store. They are an object which contains a type property which defines the action taken.

```
{
    type: 'ADD_COUNT'
}
```
## Action Creater
A function which returns an action is called Action Creater.
```
function addCount()
{
    return {
        type: 'ADD_COUNT'
    }
}
```

# Reducer
Reducers specify how the state changes in response to actions.
```
const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'ADD_COUNT':
            return {
                ...state,
                count: state.count + 1
            }

        default: 
            return state
    }
}
```

# Store
Stores store all the states of the application.
Responsibilities:
- It holds all the application state
- It allows access to state via **getState()**
- It allows state to be updated using **dispath(action)**
- It registers listeners via **subscribe(listener)**
- It handles unregistering via the function returned by listerner.

```
const createStore = redux.createStore

const store = createStore(reducer)

store.getState()
store.dispatch(addCount())
const unsubscribe = store.subscribe(() => store.getState())
unsubscribe()
```

# Multiple Reducers
If you have multiple states, you can use multiple reducers to manage them.
You can also use the same reducer by adding a new switch case for that actions. This method is useful for small number of states, as for large number of states, the function will become very complicated.

# Combine Reducers
Since createStore function takes only one reducer as the parameter, we have to combine our multiple reducers. That can be easily done using combineReducers function.
Consider two reducers, countReducer and secondReducer.
```
const rootReducer = combineReducers({
    count: countReducer,
    second: secondReducer
})

const store = createStore(rootReducer)
```
Now the state can be access as
```
console.log(state.count.count, state.second.second)
```

# Middleware
It is the suggested way to extend Redux with custom functionality.
Consider an exmaple of redux-logger package.
```
npm install redux-logger --save
```
Middleware can be applied by using the appliMiddleware function present in the redux library.
```
const logger = reduxLogger.createLogger()

const store = createStore(rootReducer, applyMiddleware(logger))
```

# Async Actions
Until now, we have been using synchronus actions. It is applicable to our example but for real world scenerios where we need to fetch data from APIs, synchronus actions cannot be used.
For fetching data from APIs, we generally use these conventions.

## State
```
state = {
    loading: true,
    data: [],
    error: ''
}
```

## Actions
FETCH_USERS_REQUEST - Fetch a list of users
FETCH_USERS_SUCCESS - Fetched successfully
FETCH_USERS_FAILURE - Could not Fetch

## Reducers
```
case FETCH_USERS_REQUEST:
    loading: true
case FETCH_USERS_SUCCESS:
    loading: false
    data: data (from API)
case FETCH_USERS_FAILURE:
    loading: false
    error: error (from API)
```

## Libraries
### Axios
Axios will be used for making API calls.
### Thunk
Thunk is a middleware for creating async action creaters.
```
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
```
Thunk middleware gives us the ability to return functions from action creaters. These functions can make API call. This function gets dispatch function as its parameter.
```
const fetchUser()
{
    return function(dispatch)
    {
        axios.get(//API call)
        .then(responce => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUsersError(error))
        })
    }
}

store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers())
```

# React-Redux
You need to install required packages.
```
npm install redux react-redux --save
```
To subscribe to the store in react, you need to use a component called Provider in you app. This Provider component wraps around your app and takes a store component which contains the state.