import React from 'react';
import counterReducer from './JS/Reducers/counterReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Components/Counter'

const store = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 
function App() {
   
return (
<Provider store={store}>
<Counter />
</Provider>
);
}
export default App;

