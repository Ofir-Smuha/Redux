import createStore from './redux/index'
import reducer from  './reducers/reducer'

const initialState = {counter: 0};

const store = createStore(reducer, initialState)

export default store;