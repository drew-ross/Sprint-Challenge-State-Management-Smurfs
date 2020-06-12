1. What problem does the context API help solve?

A: Context API tries to reduce the need for prop drilling when a number of components need access to the same data at different levels in a component tree, especially when intermediate components don't need access to the data.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: Actions trigger specific logic in a reducer by telling the reducer which logic to perform with the given data. Reducers contain the logic used to change the state when specific actions are given. The Store holds application state and keeps track of changes to the state, so that the application knows when to reload components. Because React components are a reflection of the current state, the store is the 'source of truth' in a redux app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Application state is state which is global, or available throughout the application. Component state is available locally to a specific component and can be passed to child components. A good time to use application state is when state is needed throughout the application at many levels. A good time to use component state is for smaller, more specific state that is needed solely for the function of a single component and perhaps a few children of that component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: Redux-thunk is 'middleware' that allows us to perform actions asynchronously, such as axios requests, that are then sent to the reducer after resolving.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

A: While Redux takes a while to set up, I like Redux because it's a very organized way of keeping state. I like being able to keep track of state outside of components when possible, and have access to state from any component.