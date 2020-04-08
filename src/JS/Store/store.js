import { createStore } from "redux";
import rootReducer from '../Reducer'

const reduxdevTools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store= createStore(rootReducer, reduxdevTools)

export default store