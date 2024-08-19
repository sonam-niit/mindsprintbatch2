import { createStore } from "redux";
import rootreducer from "./rootreducer";

//global store
const store= createStore(rootreducer);

export default store;